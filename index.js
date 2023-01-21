const express = require('express');
const connect = require('./src/config/db');
const PORT = process.env.PORT || 8080
const app = express();

app.use(express.json());


app.get('/',async(req,res)=>{
    res.send('working fine')
});

app.listen(PORT,()=>{
    connect();
    console.log('http://localhost:8080');
})