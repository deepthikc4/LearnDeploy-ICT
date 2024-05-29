const express=require('express');
const router=express.Router();
const admin=require('../model/admin');
const mentor=require('../model/mentor');
const jwt=require('jsonwebtoken');
router.use(express.json());

const createatoken=(name)=>{
 // send the tokento the frontend
        let payload={name:name};
        return jwt.sign(payload,process.env.SECRET_CODE);
}


// route for login



router.post('/login',async(req,res)=>{
    let email= req.body.user;
    let password =req.body.password;
    console.log(email,password);
   

    const adm = await admin.findOne({ email: email});
    console.log(adm)
    const men = await mentor.findOne({ email: email});
    console.log(men)

    if(adm){
        try {
            if(adm.password== password) {
                let role='admin';
            const token=createatoken(adm.name)
           
             res.send({message:'admin login successful',token,role});
            
             // res.json({message:"login successful",user})
            }
            else{
             res.json({message:"admin Login failed"})
            }
         } catch (error) {
             console.log(error)
         }}
         else if(men)
         {
            try {
                if(men.password== password) {

                    let role='mentor';
                    let name=men.name;
                    const token=createatoken(men.name)
                   
                    res.send({message:'mentor login successful',role,token,name});
                    // res.status(200).json({role,token,name});
                 
                 
                }
                else{
                 res.json({message:"mentor Login failed"})
                }
             } catch (error) {
                 console.log(error)
             }
         }
         else{
            res.json({message:"User not found"});
         }
    
   

  
})


module.exports=router;