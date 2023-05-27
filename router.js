const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const followController = require('./controllers/followController')

//user related route
router.get('/', userController.dashboard)
router.get('/movie-page', userController.mustBeLoggedIn,  userController.movieAccPage)
router.get('/music-page',  userController.mustBeLoggedIn,  userController.musicAccPage)
router.get('/tv-series',  userController.mustBeLoggedIn,  userController.tvSeriesPage)
router.get('/skits',  userController.mustBeLoggedIn,  userController.skitsPage)
router.get('/list-of-movies',  userController.mustBeLoggedIn,  userController.listOfMovies)
router.get('/upcoming-movies',  userController.mustBeLoggedIn,  userController.upcomingMovies)
router.get('/login', userController.loginPage)
router.get('/register', userController.registerPage)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/doesUsernameExist', userController.doesUsernameExist)
router.post('/doesEmailExist', userController.doesEmailExist)

//profile related route
router.get('/profile/:username', userController.ifUserExists, userController.sharedProfileData, userController.profilePostsScreen)
router.get('/profile/:username/followers', userController.ifUserExists, userController.sharedProfileData, userController.profileFollowersScreen)
router.get('/profile/:username/following', userController.ifUserExists, userController.sharedProfileData, userController.profileFollowingScreen)




//post related route
router.get ('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen)
router.post('/create-post', userController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)
router.get('/post/:id/edit', userController.mustBeLoggedIn, postController.viewEditScreen)
router.post('/post/:id/edit', userController.mustBeLoggedIn, postController.edit)
router.post('/post/:id/delete', userController.mustBeLoggedIn, postController.delete)
router.post('/search', postController.search)


//follow related route
router.post('/addFollow/:username', userController.mustBeLoggedIn, followController.addFollow)
router.post('/removeFollow/:username', userController.mustBeLoggedIn, followController.removeFollow)

module.exports = router
