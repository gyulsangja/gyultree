const connection = require('../model/database');

const pwdcheckfile = async (req, res) => {
    try {
        const {id, password} = req.body;
        
        const pool = await connection();

        const checkQuery = 'SELECT * FROM board WHERE id = ? AND password = ?;'
        const checkResult = await pool.query(checkQuery, [id, password]);
        console.log(checkResult[0])
        if (selectResult[0][0]) {
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


module.exports = { pwdcheckfile};