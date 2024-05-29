const mongoose=require('mongoose');
const adminSchema=mongoose.Schema({
name:String,   
password:String,
email:String,
usertype:{
    type:String,
    default:"admin"
}
})
const adminData=mongoose.model('admin',adminSchema);

module.exports=adminData;