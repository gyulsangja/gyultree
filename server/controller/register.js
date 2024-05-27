const connection = require('../model/database');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const join = async (req, res) => {
    const {username, useremail, userpwd} = req.body;
    try {
        const pool = await connection();

        const checkQuery = 'SELECT * FROM menber WHERE useremail = ? OR username = ?'
        const checkResult = await pool.query(checkQuery, [username, useremail]);
        
        if (checkResult[0][0] === undefined) {
            const hashedPwd = await bcrypt.hash(userpwd, 10);
            const registerQuery = `INSERT INTO menber (username, useremail, userpwd)
            VALUES (?, ?, ?)`
            await pool.query(registerQuery, [username, useremail, hashedPwd]);

            const userIDQuery = `SELECT LAST_INSERT_ID() AS id`;
            const rows = await pool.query(userIDQuery);
            if(rows[0][0]){
                const accesstoken = jwt.sign(
                    {
                      id: rows[0][0].id,
                      pwd: rows[0][0].userpwd,
                      email: rows[0][0].useremail,
                    },
                    "process.env.ACCESS_SECRET",
                    {
                      expiresIn: "60m",
                      issuer: "gyulgyul",
                    }
                  );
            
                  res.cookie("accessToken", accesstoken, {
                    secure: false,
                    httpOnly: true,
                  });
            
                  const refreshtoken = jwt.sign(
                    {
                      username: rows[0][0].username,
                      userpwd: rows[0][0].userpwd,
                      useremail: rows[0][0].useremail,
                    },
                    "process.env.REFRECH_SECRET",
                    {
                      expiresIn: "24h",
                      issuer: "gyulgyul",
                    }
                  );
            
                  res.cookie("refreshToken", refreshtoken, {
                    secure: false,
                    httpOnly: true, 
                  });
      
                  res.send({ success: true, message: rows[0][0].username });
            }else{
                res.send({
                    success: false,
                    status: "실패",
                    message: '회원가입 실패',
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: '데이터 로딩 실패' });
    }
}


module.exports = { join};