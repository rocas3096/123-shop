const { Schema, model } = require("mongoose");
const orderSchema = new Schema({
  customer_name: {
    type: String,
    required: true,
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  orderDetails: [
    {
      item: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
      },
    },
  ],
});

module.exports.Order = model("Order", orderSchema);
