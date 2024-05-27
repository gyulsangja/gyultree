const express = require('express');
const router = express.Router();
const {
    readfile,
    deletefile
} =require('../controller/detail')

router.post('/:id', readfile)
router.delete('/:id', deletefile)

module.exports = router;