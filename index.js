const express = require('express');
const connect = require('./src/config/db');
const PORT = process.env.PORT || 8080
const app = express();
const cors = require('cors')

const userRoute = require('./src/routes/user');
const investRoute = require("./src/routes/invest")

app.use(express.json());
app.use(cors())
app.use("/user",userRoute);
app.use("/calculate",investRoute);


app.get('/',async(req,res)=>{
    res.send('working fine')
});

app.listen(PORT,()=>{
    connect();
    console.log('http://localhost:8080');
})