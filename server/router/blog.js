const express = require('express');
const router = express.Router();
const {
    readfile,
    writefile
} =require('../controller/blog')

router.get('/', readfile)
router.post('/', writefile)

module.exports = router;