const express = require('express');
const router = express.Router();
const {
    readfile,
    deletefile
} =require('../controller/detail')

router.get('/:id', readfile)
router.get('/:id', deletefile)

module.exports = router;