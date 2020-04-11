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
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      product: newProduct,
      value: newValue,
      description: newDescription
    } = req.body;

    await connection('products').update({
      product: newProduct.body,
      description: newDescription,
      value: newValue
    }).where('id', id);

    return res.status(204).send();
  },

  async delete(req, res) {
    const { id } = req.params;
    const product = await connection('products')
      .where('id', id)
      .select('id')
      .first();

    if(!product) {
      return res.status(404).json({error: 'Produto não encontrado'});
    }

    await connection('products').where('id', id).delete();

    return res.status(204).send();
  }

};