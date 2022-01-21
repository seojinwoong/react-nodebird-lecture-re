const express = require('express');

const router = express.Router();
router.post('/', (req, res) => { // POST /post => app.js 에 접두어로 뺐기 때문
    res.json({ id: 1, contetn: "hello" });
});

router.delete('/', (req, res) => { // DELETE /post => app.js 에 접두어로 뺐기 때문
    res.json({ id: 1 });
});

module.exports = router;