const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
// support both CommonJS export (function) and compiled ES default export (object with .default)
const plm = typeof passportLocalMongoose === 'function' ? passportLocalMongoose : passportLocalMongoose.default || passportLocalMongoose;

const userSchema = new Schema({
     email:{
     type: String,
     required: true
     },
})

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);