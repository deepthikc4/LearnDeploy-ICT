const mongoose=require('mongoose');
const projectSchema=mongoose.Schema({
    topic:String,
    description:String,
image:String,
mentor:String,
Batch: String,
submissions:[{
    
    Name: String,
    // Batch: String,
    // Email: String,
    // SubmissionLink: String,
    EvaluationStatus: { type: String, enum: ['completed', 'pending'], default: 'pending' }}],
  
})
const projectData=mongoose.model('project',projectSchema);

module.exports=projectData;