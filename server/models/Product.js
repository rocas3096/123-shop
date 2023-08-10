const { Schema, model } = require("mongoose");

const productSchema = Schema({
  business_id: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});
const Product = model("Product", productSchema);

module.exports = Product;
