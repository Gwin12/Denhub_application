const bcrypt = require("bcryptjs") //hashing password
const usersCollection = require('../db').db().collection("users") // mongo database
const validator = require("validator") //validate email



let User = function(data) {
   this.data = data
   this.errors = []
   
}

//clean up
User.prototype.cleanUp = function() {
   if(typeof(this.data.firstname) != "string") {this.data.firstname = ""}
   if(typeof(this.data.lastname) != "string") {this.data.lastname = ""}
   if(typeof(this.data.username) != "string") {this.data.username = ""}
   if(typeof(this.data.email) != "string") {this.data.email = ""}
   if(typeof(this.data.password) != "string") {this.data.password = ""}

   //get rid of unwanted properties
   this.data = {
      firstname: this.data.firstname.trim().toLowerCase(),
      lastname: this.data.lastname.trim().toLowerCase(),
      email: this.data.email.trim().toLowerCase(),
      username: this.data.username.trim().toLowerCase(),
      password: this.data.password,
      role: "user"
   }

}

//validate prototype
User.prototype.validate = function() {
   return new Promise(async (resolve, reject) => {
      if(this.data.firstname == "") {this.errors.push("You must provide a first name.")}
      if(this.data.firstname != "" && !validator.isAlphanumeric(this.data.firstname)) {this.errors.push("First name can only contain letters.")}
      if(this.data.lastname == "") {this.errors.push("You must provide a last name.")}
      if(this.data.lastname != "" && !validator.isAlphanumeric(this.data.lastname)) {this.errors.push("Last name can only contain letters.")}
      if(this.data.username == "") {this.errors.push("You must provide a username.")}
      if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
      if(!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address.")}
      if(this.data.password == "") {this.errors.push("You must provide a password.")}
      if(this.data.password.length > 0 && this.data.password.length < 8){this.errors.push("Password must be at least 8 characters.")}
      if(this.data.password.length > 50){this.errors.push("Password cannot exceed 50 characters")}
      if(this.data.username.length > 0 && this.data.username.length < 3){this.errors.push("username must be at least 3 characters.")}
      if(this.data.username.length > 30){this.errors.push("username cannot exceed 30 characters.")}
   
      //only if username is valid check to see if it's already taken 
      if(this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)) {
         let usernameExists = await usersCollection.findOne({username: this.data.username})
         if(usernameExists){this.errors.push('That username is already taken.')}
      }
   
      //only if email is valid check to see if it's already taken 
      if((this.data.email)) {
         let emailExists = await usersCollection.findOne({email: this.data.email})
         if(emailExists){this.errors.push('That email is already taken.')}
      }
      resolve()
   } )
}

//login
User.prototype.login = function() {
  return new Promise((resolve, reject) => {
   this.cleanUp()
   usersCollection.findOne({username: this.data.username}).then((attemptedUser) => {
      if(attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password) ) {
         resolve('congrat')
      }else{
         reject('Invalid username or password.')
      }
   }).catch(function() {
      reject("Please try again.")
   })
  })
}

//register
User.prototype.register = function() {
   return new Promise(async (resolve, reject) =>{
      // step 1 validate user data
      this.cleanUp()
      await this.validate()
   
      //step 2 only if theres no errors then save data to database
      if(!this.errors.length) {
         //hash user password
         let salt = bcrypt.genSaltSync(10)
         this.data.password = bcrypt.hashSync(this.data.password, salt)
         await usersCollection.insertOne(this.data)
         resolve()
      }else {
         reject(this.errors)
      }
      
   })
}


User.findByUsername = function(username) {
   return new Promise(function(resolve, reject) {
      if(typeof(username) != "string") {
         reject()
         return
      }
      usersCollection.findOne({username: username}).then(function(userDoc) {
         if(userDoc) {
            userDoc = new User(userDoc)
            userDoc = {
               _id: userDoc.data._id,
               username: userDoc.data.username,
               firstname: userDoc.data.firstname,
               lastname: userDoc.data.lastname
            }
            resolve(userDoc)
         }else {
            reject()
         }
      }).catch(function() {
         reject()
      })
   })
}


User.doesEmailExist = function(email) {
   return new Promise(async function(resolve, reject) {
      if (typeof(email) != "string") {
         resolve(false)
         return
      }

      let user = usersCollection.findOne({email: email})

      if (user) {
         resolve(true)
      } else {
         resolve(false)
      }
   })
}


module.exports = User