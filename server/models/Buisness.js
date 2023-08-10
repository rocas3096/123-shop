const { Schema, model } = require("mongoose");

const buisnessSchema = new Schema({
  buisness_name: {
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

const Buisness = model('Buisness', buisnessSchema);

module.exports = Buisness;
