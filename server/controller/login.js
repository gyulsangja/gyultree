const connection = require('../model/database');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


const postLogin = async (req, res) => {
    try {
        const { useremail, userpwd } = req.body;
        const pool = await connection();

        const findQuery = 'SELECT * FROM menber WHERE useremail = ?;'
        const rows = await pool.query(findQuery, [useremail]);

        let match = false;
        for (let a = 0; a < rows[0].length; a++) {
            match = await bcrypt.compare(userpwd, rows[0][a].userpwd);
            console.log(match);
        }

        let resData = {};
        if (!match) {
            resData = {
              success: false,
              message: "아이디 또는 비밀번호를 확인하세요.",
            };
            return res.send(resData);
          } else {
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
          }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: '데이터 로딩 실패' });
    }
}

const loginSuccess = async (req, res) => {
    try {
      const token = req.cookies.accessToken;
      const confirm = jwt.verify(token, "process.env.ACCESS_SECRET");
      console.log(confirm);
  
      let conn;
  
      conn = await pool.getConnection();
      const sql = `SELECT * FROM menber WHERE  username=? AND userpwd=?;`;
      const find = await conn.query(sql, [confirm.username, confirm.userpwd]);
      console.log(find[0][0]);
  
      const { userpwd, ...user } = find[0][0];
      res.status(200).json({ success: true, message: user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };


module.exports = { postLogin, loginSuccess};