
const mongoose = require('mongoose')

const advertsSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags:[String]
}, {
    collection: 'advert'
})

const Advert = mongoose.model('Advert', advertsSchema)

module.exports = Advert