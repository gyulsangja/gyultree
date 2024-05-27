const express = require('express');
const router = express.Router();
const {
    readfile,
    writefile
} =require('../controller/blog')

router.post('/read', readfile)
router.post('/', writefile)

module.exports = router;