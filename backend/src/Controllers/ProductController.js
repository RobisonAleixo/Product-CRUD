module.exports = {

  async index(req, res) {  

    return res.json({'product': 'oi'});
  },

  async create(req, res) {
    const { product, value, description } = req.body;
    console.log(product);

    return res.json({});
  }

};