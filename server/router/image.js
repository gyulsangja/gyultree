const express = require('express');
const router = express.Router();
const {
    writefile,
    deletefile
} =require('../controller/image')

router.post('/', writefile)
router.post('/delete', deletefile)

module.exports = router;