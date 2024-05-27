const connection = require('../model/database');

const readfile = async (req, res) => {
    try {
        
        const pool = await connection();
        
        const selectQuery = 'SELECT * FROM board ORDER BY time DESC'
        const selectResult = await pool.query(selectQuery);
        if (selectResult[1]) {
            res.send({
                success: true,
                status: "성공",
                data: selectResult[0]
            });
        } else {
            res.send({
                success: false,
                status: "실패",
                data: "데이터 로딩 실패",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: '데이터 로딩 실패' });
    }
}

const writefile = async (req, res) => {
    
    try {
        const currentDate = new Date();
        const { title, content, writer, imgurl, imgID } = req.body;
        console.log(title)
        const pool = await connection();

        const writeQuery = `INSERT INTO board (title, content, name, imgurl, imgID, time)
        VALUES (?, ?, ?, ?, ?, ?)`;
        const writeResult = await pool.query(writeQuery, [title, content, writer, imgurl, imgID, currentDate]);
        if(writeResult){
            const selectQuery = 'SELECT * FROM board ORDER BY time DESC'
            const selectResult = await pool.query(selectQuery);
            if (selectResult[1]) {
                res.send({
                    success: true,
                    status: "성공",
                    data: selectResult[0]
                });
            } else {
                res.send({
                    success: false,
                    status: "실패",
                    data: "데이터 로딩 실패",
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: '데이터 로딩 실패' });
    }
}


module.exports = { readfile, writefile};