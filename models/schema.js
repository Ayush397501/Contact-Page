const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  username: {
    type: String,
    required:true,
    unique:true
  },
  email: {
    type: String,
    required:true,
    unique:true
    
  },
  password: {
    type: String,
    required:true
  },
  cpassword: {
    type: String,
    required:true
  },
});

const Form = new mongoose.model("form", formSchema);
module.exports = Form;

