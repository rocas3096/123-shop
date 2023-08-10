const { Schema, model } = require("mongoose");

const buissnessSchema = new Schema({
  buissness_name: {
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
      validator: function(value) {
        const addressPattern = /^[a-zA-Z0-9\s,'-]*$/;
        return addressPattern.test(value);
      },
      message: props => `${props.value} is not a valid address!`,
    },
  },
});

const Buissness = model('Buissness', buissnessSchema);

module.exports = Buissness;
