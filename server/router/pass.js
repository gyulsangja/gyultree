const express = require('express');
const router = express.Router();
const {
    pwdcheckfile,
} =require('../controller/post')

router.post('/', pwdcheckfile)

module.exports = router;