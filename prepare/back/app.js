const express = require('express');
const postRouter = require('./routes/post');

const app = express();

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체수정하기
// app.delete -> 제거
// app.patch -> 부분수정하기
// app.options -> 찔러보기
// app.head -> 헤더만 가져오기

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello api');
});

app.use('/post', postRouter); 

app.listen(3065, () => {
    console.log('서버실행중');
})