const express = require('express');
const router = express.Router();
const {
    join,
} =require('../controller/register')

router.post('/', join)

module.exports = router;