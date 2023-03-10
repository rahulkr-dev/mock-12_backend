const {Schema,model} = require('mongoose')

const userSechma = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    hash:{
        type:String,
        required:true
    }
})

const User = model("user",userSechma);

module.exports = User;
