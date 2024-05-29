const express=require('express');
const router=express.Router();
const projectdetails=require('../model/project');
const authUser = require('../middleware/authUser.js');
const jwt = require('jsonwebtoken')

function verifytoken(req,res,next){
    const token = req.headers.token;
    try {
        if(!token) throw 'unauthorized access';
        let payload = jwt.verify(token,'ictapp');
        if(!payload)throw 'unauthorized access';
        next()
    } catch (error) {
      res.status(401).send('caught in error')
    }
    }

router.use(express.json());
// for creting new mentor

router.post('/projectform',verifytoken,async(req,res)=>{

    try {
       const data=req.body;
       const newProject=await projectdetails(data).save();
       console.log(newProject);
       if(newProject)
       {
       
       res.status(200).send({Message:'New project Topic Added successfully'})
    }

    } catch (error) {
        res.status(400).send({Message:'failed'})
    }
    }
)


// Display mentor details in Admin Dashboard page

router.get('/admin', verifytoken,(req,res)=>{

    try {
        projectdetails.find().then((pdetails)=>{
            res.status(200).send(pdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display Project details"}) 
    }
})

router.delete('/deleteproject/:id',verifytoken,async(req,res)=>{

    try {
    let id=req.params.id;
    console.log(id);
    const deleteproject=await  projectdetails.findByIdAndDelete(id);
    console.log(deleteproject);
    if(!deleteproject){
        return res.status(404).json({error:`no data found`});
       
    }
    res.status(200).send({Message:"project deleted Successfully"})
    
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
    })
    
    
    
    
    router.put('/updateproject/:id',verifytoken,async(req,res)=>{
        try {
            let id=req.params.id;
            const updateproject= await  projectdetails.findByIdAndUpdate(id, req.body);
            console.log(updateproject);
            if(!updateproject)
            {
                console.log("no project found");
               return res.status(404).json({error:`no data found`});
            }
            res.status(200).send({Message:"data updated"});
        } catch (error) 
        {
            res.status(400).json({ error: 'Bad Request' });
        }
    })
    

    // mentor dashboard
    
router.get('/mentoProjects/:mentor', verifytoken, async(req,res)=>{
    const mentorName = req.params.mentor;
    try {
        projectdetails.find({ mentor: mentorName })
        .then((pdetails)=>{
            res.status(200).send(pdetails);
        })
    } catch (error) {
       res.status(404).send({Message:"can not display Project details"}) 
    }
})



// To display all the submissions of the particular mentor

router.get('/submissions/:mentor',verifytoken,async(req,res)=>{
    const mentorName = req.params.mentor;
    try {  
     const projectDetails=await projectdetails.find({ mentor: mentorName }) ;
     if(!projectDetails)
        {
        return res.status(404).json({ message: 'Project not found' });}
      res.json(projectDetails);
    } catch (err) {
        console.error('Error fetching submissions:', err);
      res.status(500).json({ message: err.message });
    }
  });

// delete Student submission based on ID



router.put('/updateSub',verifytoken, async (req, res) => {
    const pid = req.body.pid;
    const sid = req.body.sid;

    try {
        console.log(pid, sid);

     
        const updatedProject = await projectdetails.findOneAndUpdate(
            { _id: pid },
            { $pull: { 'submissions': { ID: sid } } },
            { new: true } 
        );

     
        if (!updatedProject) {
            return res.status(404).json({ error: 'No project found' });
        }

        res.status(200).json({ message: 'Submission deleted successfully', updatedProject });
    } catch (error) {
        console.error('Error deleting submission:', error);
        res.status(500).json({ message: err.message });
    }
});



module.exports=router;