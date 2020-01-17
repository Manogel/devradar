const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.get('/search', SearchController.index)

module.exports= routes