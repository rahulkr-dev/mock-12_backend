const mongoose = require('mongoose')
const DB_URL= `mongodb+srv://r:f@cluster0.cyy5u.mongodb.net/mock-12_backend?retryWrites=true&w=majority`
const connect = async()=>{
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URL,{useNewUrlParser: true})
}

module.exports = connect