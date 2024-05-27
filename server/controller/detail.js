const connection = require('../model/database');

const readfile = async (req, res) => {
    try {
        const {id} = req.params;
        
        const pool = await connection();
        
        const selectQuery = 'SELECT * FROM board WHERE id = ?'
        const selectResult = await pool.query(selectQuery, [id]);

        if (selectResult) {
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

const deletefile = async (req, res) => {
    try {
        const {id} = req.params;
        
        const pool = await connection();
        
        const deleteQuery = 'SELECT * FROM board WHERE id = ?'
        const selectResult = await pool.query(deleteQuery, [id]);

        if (selectResult) {
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


module.exports = { readfile, deletefile};