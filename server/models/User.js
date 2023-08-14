const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Business = require("./Business");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  first_time_log: {
    type: Boolean,
    required: true,
    default: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Format: xxx-xxx-xxxx`,
    },
  },

  vendor: {
    type: Boolean,
    default: false,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
});

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  let userInput = this.userInput || {};

  if (userInput.newVendorUser) {
    let newBusiness = new Business({
      user_id: this._id,
      business_name: userInput.business_name,
      description: userInput.description,
      address: userInput.address,
    });
    await newBusiness.save();
  } else {
    delete this.userInput;
  }
  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
