var express = require("express");
var app = express();
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8500;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(PORT, ()=>{
    console.log('server on ' + PORT)
})

app.use(express.static(path.join(__dirname, '/dist')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/dist', 'index.html'))
})

app.use('/pass', require('./router/pass.js'))
app.use('/image', require('./router/image.js'))
app.use('/detail', require('./router/detail.js'))
app.use('/blog', require('./router/blog.js'))
app.use('/register', require('./router/register.js'))
app.use('/login', require('./router/login.js'))