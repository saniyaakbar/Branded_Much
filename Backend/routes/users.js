
var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');
var url = process.env.DATABASE_URL

console.log(url)


mongoose.connect('mongodb://localhost/brandedmuch');

var userSchema = mongoose.Schema({
  name: String,
  company: String,
  industry: String,
  designation: String,
  email: String,
  phone: Number,
  location: String,
  message: {
    type: String,
    default:  ""
  }
})

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);





