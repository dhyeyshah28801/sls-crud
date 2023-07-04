'use strict';
 var Model = require("../../models/index")

module.exports.addUser = function(event, context){
console.log(event)
  Model.User.create({
    firstName:event.body.firstName,      
    lastName:event.body.lastName,
    age:event.body.age
  });
  return context;
};
