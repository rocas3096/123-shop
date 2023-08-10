const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    item: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
});

// Define a virtual field for the total amount
cartSchema.virtual('totalAmount').get(function() {
    return this.item.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.product.price;
    }, 0);
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;