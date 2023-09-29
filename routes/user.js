const express = require('express')
const { register, login, editUser } = require('../Controllers/user')
const { registerValidation, validator } = require('../Middleware/Validator')
const isAuth = require('../Middleware/isAuth')
// require router 

const router =express.Router()
//creating routes
//register
router.post('/register',registerValidation(),validator,register)

//login

router.post('/login',login)

router.get('/current',isAuth,(req,res)=>{
    res.send(req.user)
})
router.put('/edit/:_id',editUser)


//export router

module.exports = router