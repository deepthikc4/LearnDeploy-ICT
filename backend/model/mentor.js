const mongoose=require('mongoose');
const mentorSchema=mongoose.Schema({
    name:String,
    email:String,
phoneNumber:Number,
password:String,
projectTopics:[{
    type: String
    }],
    username:String
          
    

// usertype:{
//     type:String,
//     default:"mentor"
// }
})
mentorSchema.pre('save', function(next) {
    // Set the username to the value of the name field before saving
    this.username = this.name;
    next();
});
const mentorData=mongoose.model('mentor',mentorSchema);

module.exports=mentorData;