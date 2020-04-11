const express = require('express')
const routes = express.Router();
const ProductController = require('./Controllers/ProductController');

routes.get('/', ProductController.index);
routes.post('/', ProductController.create);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.delete);

module.exports = routes;