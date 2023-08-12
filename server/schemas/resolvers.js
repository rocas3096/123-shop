const { Business, Cart, Product, User } = require("../models");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find({});
      return users;
    },
    // GET user by ID
    getUser: async (_, { userId }) => {
      const user = await User.findById(userId);
      return user;
    },
    // GET all products
    getProducts: async () => {
      const products = await Product.find();
      return products;
    },
    // GET cart by user ID
    getCartByUser: async (_, { userId }) => {
      const cart = await Cart.findOne({ user: userId }).populate(
        "item.product"
      );
      return cart;
    },
    // GET business by ID
    getBusiness: async (_, { businessId }) => {
      const business = await Business.findById(businessId);
      return business;
    },
  },
  Mutation: {
    // POST new User
    createUser: async (_, { userInput }) => {
      const user = new User(userInput);
      await user.save();
      return user;
    },
    // POST new Product
    createProduct: async (_, { productInput }) => {
      const product = new Product(productInput);
      await product.save();
      return product;
    },
    //
    addToCart: async (_, { userId, productId, quantity }) => {
      let cart = await Cart.findOne({ user: userId });

      if (!cart) {
        // Create new cart if none exist for the user
        cart = new Cart({
          user: userId,
          item: [{ product: productId, quantity }],
        });
      } else {
        // Add the item to the existing cart
        cart.item.push({ product: productId, quantity });
      }

      await cart.save().populate("item.product");
      return cart;
    },
    createBusiness: async (_, { businessInput }) => {
      const business = new Business(businessInput);
      await business.save();
      return business;
    },
    updateBusinessAddress: async (
      _,
      { businessId, businessName, address, description }
    ) => {
      const updatedBusiness = await Business.findByIdAndUpdate(
        businessId,
        {
          business_name: businessName,
          description,
          address,
        },
        { new: true }
      );
      return updatedBusiness;
    },
  },
};

module.exports = resolvers;
