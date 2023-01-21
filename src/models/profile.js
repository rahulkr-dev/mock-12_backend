const {Schema,model} = require('mongoose')

const profileSechma = new Schema({
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

const Profile = model("profile",profileSechma);

module.exports = User;
