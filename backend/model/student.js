const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    Name:String,
    SubmissionLink: String,
    EvaluationStatus: { type: String, enum: ['completed', 'pending'], default: 'pending' },
    marks:String,
    comments:String
})
const studentData=mongoose.model('student',studentSchema);

module.exports=studentData;