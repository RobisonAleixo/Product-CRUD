const connection = require('../database/connection');

module.exports = {

  async index(req, res) {  
    const products = await connection('products').select('*');
    return res.json(products);
  },

  async create(req, res) {
    const { product, value, description } = req.body;
    
    await connection('products').insert({
      product,
      value,
      description
    });

    return res.json({});
  }

};