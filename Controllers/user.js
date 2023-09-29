//require schema user
const user = require('../Models/user')
//require bcrypt 
const bcrypt= require('bcrypt')
//require jwt
const jwt= require('jsonwebtoken')

// register
exports.register = async (req,res) =>{
    try {
        const {name,email,password,phone}= req.body
        const foundUser = await user.findOne({email})
        if(foundUser){
            res.status(400).send("email already used")
        }
        const salt = 10
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new user ({...req.body})
        newUser.password = hashedPassword
        newUser.save()
        const token = jwt.sign({
                id:newUser._id

        },process.env.SECRET_KEY)
            res.status(200).send({msg:"user registred successfully",newUser, token})
        
    } catch (error) {
        res.status(400).send({msg:"cannot register",error})
    }
}

//login
exports.login = async (req,res) =>{
    try {
        const {email,password}=req.body
        const foundUser =await user.findOne({email})
        if(!foundUser){
            res.status(400).send("email not found")
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password)
        if(!checkPassword){
            res.status(400).send("password incorrect")
        }
        const token = jwt.sign({
            id:foundUser._id

    },process.env.SECRET_KEY)
    res.status(200).send({msg:"logged in successfully",foundUser,token})
    } catch (error) {
        res.status(400).send({msg:"cannot login",error})
    }
}

exports.editUser = async (req,res) =>{
    try {
        const {_id}=req.params
        const newUser =req.body
        await user.updateOne({_id},{$set: newUser})
        res.status(200).send({msg:'updated successfully',newUser})
    } catch (error) {
        res.status(400).send({msg:'error on updating',error})
    }
}