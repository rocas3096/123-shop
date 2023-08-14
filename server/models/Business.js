const { Schema, model } = require("mongoose");

const businessSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  business_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    validate: {
      validator: function (value) {
        const addressPattern = /^[a-zA-Z0-9\s,'-]*$/;
        return addressPattern.test(value);
      },
      message: (props) => `${props.value} is not a valid address!`,
    },
  },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Business = model("Business", businessSchema);

module.exports = Business;
