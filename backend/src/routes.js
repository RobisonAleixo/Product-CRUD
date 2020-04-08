const express = require('express')
const routes = express.Router();
const ProductController = require('./Controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/', ProductController.create);

module.exports = routes;