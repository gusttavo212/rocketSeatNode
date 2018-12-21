const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index (req, res){
        //Proxima linha só é executada depois do await
        const products = await Product.find()

        return res.json(products)
    },
}