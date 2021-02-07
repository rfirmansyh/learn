const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
        maxlength: [255, 'Panjang nama makanan maksimal 255 karakter'],
        required: [true, 'Nama produk harus diisi']
    },
    
    description: {
        type: String,
        maxlength: [1000, 'Panjang deskripsi maksimal 1000 karakter']
    },

    price: {
        type: Number,
        default: 0
    },

    // ----------- Relation with Category ------------- \\
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    // ----------- Relation with Tags ------------- \\
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ],


    image_url: String
}, { timestamps: true });

module.exports = model('Product', productSchema);