const express = require('express');
const router=express.Router();
const { poolPromise } = require('../../config/db')  
const sql = require('mssql')  
const bcrypt = require ('bcryptjs');
const {check, validationResult} = require('express-validator')


//@route GET/api/users 
//@desc Test route
//@access Public

router.post('/',[
    check('username', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid e-mail').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({min:8}).isAlpha(),
    check('hobbies', 'hobbies required').not().isEmpty(),
    ],
     async (req,res)=>  {  
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        
        const {username,password,email,hobbies} = req.body;

          //Password bcrypt

        const salt= await bcrypt.genSalt(10);
        cryptpassword = await bcrypt.hash(password,salt);

        
         var pool = await poolPromise  
         var result = await pool.request()

         //Check if user exists
        .query('select * from users',function(err, users){  
            if (err)  
            {  
        
            }  
            else {  
            let data = users.recordset;  
            let usernameInUse = data.some(user => user.username===username)
            // UserName taken
         
            if(usernameInUse){
            res.status(400).json({msg : 'Username is already in use'});
            }
            //Email taken
             emailInUse = data.some((user) => {return user.email===email})
            if(emailInUse){
            res.status(400).json({msg : 'Email is already in use'});
             }
            }  
        })
        
        //insert to DB
         pool = await poolPromise  
        result = await pool.request()
        .input("username",sql.VarChar(50), username)
        .input("email", sql.VarChar(50),email)
        .input("password",sql.VarChar(50),cryptpassword)
        .input("hobbies", sql.NVarChar('max'),JSON.stringify(hobbies))
        .execute("InsertUser").then(function (recordSet){
        res.status(200).json({ status: "Success" })  
        })  
    
    }
    
    catch(error){
            console.error(error.message)
            res.status(500).send('Server error');
    }

      
});
module.exports = router;