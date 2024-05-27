const AWS = require('aws-sdk');
const multer = require('multer');
const fs = require('fs');

const endpoint = new AWS.Endpoint('http://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = process.env.DB_ACKEY;
const secret_key = process.env.DB_SEKEY;

const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key
    }
});
const bucket_name = process.env.DB_BUCKET;
const upload = multer({ dest: 'uploads/' })

const connection = require('../model/database');

const writefile = (req, res) => {

    upload.single('image')(req, res, async (err)=>{
        const currentDate = new Date();
        try {
            const pool = await connection();
            const insertQuery = `INSERT INTO store (img)
            VALUES (?)`;
            const insertResult = await pool.query(insertQuery, [currentDate]);
            if(insertResult){
                const idQuery = `SELECT id
                FROM store
                ORDER BY id DESC
                LIMIT 1;`;
                const idResult = await pool.query(idQuery);
                const file = req.file;

                const file_path = file.path;
                const object_name = 'gyultree/'+ idResult[0][0].id + '/' + file.filename +file.originalname;
                
                await S3.putObject({
                    Bucket: bucket_name,
                    Key: object_name,
                    ACL: 'public-read',
                    Body: fs.createReadStream(file_path)
                }).promise();

                const fileURL = `https://kr.object.ncloudstorage.com/gyulstorage/` + object_name;
                if (fileURL) {
                    res.send({
                        success: true,
                        status: "성공",
                        data: {
                            url : fileURL,
                            id : idResult[0][0].id,
                        }
                    });
                } else {
                    res.send({
                        success: false,
                        status: "실패",
                        data: "데이터 전송 실패",
                    });
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: '데이터 전송 실패' });
        }
    })
    
}

const deletefile = async (req, res) => {
    try {
        const { id } = req.body;
        const pool = await connection();
        const deleteQuery = `DELETE FROM store WHERE id = ?`;
        await pool.query(deleteQuery, [id]);

        const folderPath = 'gyultree/' + id + '/';   
        const listObjectsParams = {
            Bucket: bucket_name,
            Prefix: folderPath 
        };
        try {
            const data = await S3.listObjects(listObjectsParams).promise();
            const objects = data.Contents;

            const deleteObjectsParams = {
                Bucket: bucket_name,
                Delete: {
                    Objects: objects.map(obj => ({ Key: obj.Key }))
                }
            };
            await S3.deleteObjects(deleteObjectsParams).promise();
        } catch (error) {
            console.error(error);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: '데이터 로딩 실패' });
    }
}


module.exports = { writefile, deletefile};