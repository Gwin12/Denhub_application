const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const markdown = require('marked')
const app = express()
const sanitizeHTMl = require('sanitize-html')

//config for session
let sessionOptions = session({
   secret: "JavaScript is so cool",
   store:  MongoStore.create({client: require('./db')}),
   resave: false,
   saveUninitialized: false,
   cookie: {maxAge: 1000 * 60 * 60 * 31536000, httpOnly:true}
})

app.use(sessionOptions)
app.use(flash())

app.use(function(req, res, next) {
   //make our markdown function available from ejs templates
   res.locals.filterUserHTML = function(content) {
      return sanitizeHTMl(markdown.parse(content), {allowedTags: ['p', 'br', 'ul', 'ol', 'li', 'strong', 'bold', 'i', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], allowedAttributes: {}})
   }

   //make all errors and success flash messages available from all templates
   res.locals.errors = req.flash("errors")
   res.locals.success = req.flash("success")

   //make current user id available on req object
   if(req.session.user) {req.visitorId = req.session.user._id} else {req.visitorId = 0}
   
   //make user session data available from view folder
   res.locals.user = req.session.user
   next()
})

const router = require('./router')


//boiler plate
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//to use public folder
app.use(express.static('public'))

//to use views(templates) in ejs
app.set('views', 'views')
app.set('view engine', 'ejs')


app.use('/', router)

const server = require('http').createServer(app)
const io = require('socket.io')(server)

//to make express session data available in socket io
io.use(function(socket, next) {
   sessionOptions(socket.request, socket.request.res, next)
})


io.on('connection', function(socket) {
   if (socket.request.session.user) {
      let user = socket.request.session.user

      socket.emit('welcome', {username: user.username})

      socket.on('chatMessageFromBrowser', function(data) {
         socket.broadcast.emit('chatMessageFromServer', {message: sanitizeHTMl(data.message, {allowedTags: [], allowedAttributes: {}}), username: user.username})
      })
   }
})



module.exports = server