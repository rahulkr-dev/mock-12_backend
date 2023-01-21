const argon = require("argon2");
const jwt = require('jsonwebtoken')
const User = require("../models/user")


const signupUser = async(req,res)=>{
    try{
        const {email,name,password}  = req.body;
        const hash = await argon.hash(password)
        let user = new User({email,name,hash});
        await user.save();
        res.status(201).send({msg:"User creatd successfully"})
    }catch(err){
       
        res.status(500).send(err.message)
    }
}

const loginUser = async(req,res)=>{
    try{

        const {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(404).send("User not found");

        };
        // console.log(user.hash,password)
        if(await argon.verify(user.hash,password)){
            let token = jwt.sign({email,id:user._id},"SECRET",{expiresIn:"7d"});
            res.send({msg:"Singin sucessfully",token})
        }else{
            res.send({msg:"wrong Credential"})
        }

    }catch(err){
        res.status(500).send(err.message)

    }
}

const getUser = async(req,res)=>{
    try{
        const token = req.params.token
        if(!token){

            return res.status(404).send("User not found");
        }
        console.log(token)
        let decode = jwt.decode(token);
        console.log(decode)
        let user = await User.findById(decode.id);
        if(!user){
            return res.status(404).send("User not found");

        };
        res.send({mgs:"user details",user,time:Date.now()})
        // console.log(user.hash,password)
        

    }catch(err){
        res.status(500).send(err.message)

    }
}

module.exports = {loginUser,signupUser,getUser}