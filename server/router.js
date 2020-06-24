// 라우터(Router) 생성
const express = require('express');
const router = express.Router();

// 패스(경로) 설정
router.get('/', (req, res) => {
    res.send('server is up and running');
})

module.exports = router;