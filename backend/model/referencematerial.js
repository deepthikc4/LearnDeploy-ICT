const mongoose = require('mongoose');

const referenceMaterialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const ReferenceMaterial = mongoose.model('referencematerial', referenceMaterialSchema);
module.exports=ReferenceMaterial;