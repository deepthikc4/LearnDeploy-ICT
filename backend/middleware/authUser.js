const jwt=require('jsonwebtoken')

const authUser=async(req,res,next)=>{
    const authHeader = req?.headers?.authorization;

      if(!authHeader || !authHeader?.startsWith("Bearer")){
        next("authentication failed")
      }

      const token = authHeader?.split(" ")[1];

      try {
       const userToken= jwt.verify(token,process.env.SECRET_CODE)

       req.body.user={name:userToken.name}

       next()
       
      } catch (error) {
          console.log(error)
          next("authentication failed")
      }
}

module.exports=authUser;