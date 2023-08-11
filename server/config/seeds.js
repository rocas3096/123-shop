const db = require("./connection");
const {
  User,
  Product,
  Business,
  Cart,
  CartItem,
  Order,
  OrderItem,
} = require("../models");

db.once("open", async () => {
  // Delete existing data
  await User.deleteMany();
  await Product.deleteMany();
  await Business.deleteMany();
  await Cart.deleteMany();
  await Order.deleteMany();

  // Insert sample data
  const users = await User.insertMany([
    // User data
    {
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      vendor: false,
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      password: "password456",
      phone_number: "987-654-3210",
      vendor: false,
    },
    {
      first_name: "Michael",
      last_name: "Johnson",
      email: "michael@example.com",
      password: "password789",
      phone_number: "555-555-5555",
      vendor: false,
    },
    {
      first_name: "Emily",
      last_name: "Brown",
      email: "emily@example.com",
      password: "passwordabc",
      phone_number: "111-222-3333",
      vendor: false,
    },
    {
      first_name: "David",
      last_name: "Williams",
      email: "david@example.com",
      password: "passworddef",
      phone_number: "444-444-4444",
      vendor: false,
    },
    {
      first_name: "Sophia",
      last_name: "Jones",
      email: "sophia@example.com",
      password: "passwordghi",
      phone_number: "666-777-8888",
      vendor: false,
    },
    {
      first_name: "Daniel",
      last_name: "Miller",
      email: "daniel@example.com",
      password: "passwordjkl",
      phone_number: "999-888-7777",
      vendor: false,
    },
    {
      first_name: "Olivia",
      last_name: "Davis",
      email: "olivia@example.com",
      password: "passwordmno",
      phone_number: "123-987-6543",
      vendor: false,
    },
    {
      first_name: "James",
      last_name: "Wilson",
      email: "james@example.com",
      password: "passwordpqr",
      phone_number: "987-654-3219",
      vendor: false,
    },
  ]);

  const products = await Product.insertMany([
    // Product data
    {
      product_name: "T-shirt",
      product_description: "Comfortable cotton t-shirt",
      price: 19.99,
      quantity: 100,
    },
    {
      product_name: "Jeans",
      product_description: "Classic denim jeans",
      price: 49.99,
      quantity: 50,
    },
    {
      product_name: "Sneakers",
      product_description: "Stylish athletic sneakers",
      price: 69.99,
      quantity: 75,
    },
    {
      product_name: "Backpack",
      product_description: "Durable and spacious backpack",
      price: 29.99,
      quantity: 60,
    },
    {
      product_name: "Watch",
      product_description: "Elegant wristwatch",
      price: 99.99,
      quantity: 30,
    },
    {
      product_name: "Laptop",
      product_description: "High-performance laptop",
      price: 999.99,
      quantity: 20,
    },
    {
      product_name: "Headphones",
      product_description: "Wireless over-ear headphones",
      price: 149.99,
      quantity: 40,
    },
    {
      product_name: "Smartphone",
      product_description: "Latest smartphone model",
      price: 699.99,
      quantity: 25,
    },
    {
      product_name: "Sunglasses",
      product_description: "UV protection sunglasses",
      price: 39.99,
      quantity: 80,
    },
  ]);

  const businesses = await Business.insertMany([
    // Business data
    {
      name: "Electronics Emporium",
      description: "Your one-stop shop for electronics",
      address: "123 Main Street",
      phone_number: "555-123-4567",
      email: "info@electronics.com",
      password: "businesspass123",
      products: [],
      orders: [],
    },
    {
      name: "Fashion Frenzy",
      description: "Trendy fashion store",
      address: "456 Fashion Avenue",
      phone_number: "555-987-6543",
      email: "info@fashionfrenzy.com",
      password: "fashionpass123",
      products: [],
      orders: [],
    },
    {
      name: "Home Essentials",
      description: "Everything you need for your home",
      address: "789 Homeware Street",
      phone_number: "555-456-7890",
      email: "info@homeessentials.com",
      password: "homepass123",
      products: [],
      orders: [],
    },
    {
      name: "Outdoor Adventures",
      description: "Outdoor gear and equipment",
      address: "234 Outdoor Way",
      phone_number: "555-789-0123",
      email: "info@outdooradventures.com",
      password: "outdoorpass123",
      products: [],
      orders: [],
    },
    {
      name: "Book Haven",
      description: "Wide selection of books",
      address: "567 Book Street",
      phone_number: "555-234-5678",
      email: "info@bookhaven.com",
      password: "bookpass123",
      products: [],
      orders: [],
    },
    {
      name: "Sports Galore",
      description: "Sports equipment and apparel",
      address: "890 Sports Avenue",
      phone_number: "555-567-8901",
      email: "info@sportsgalore.com",
      password: "sportspass123",
      products: [],
      orders: [],
    },
    {
      name: "Pet Paradise",
      description: "Supplies for your furry friends",
      address: "123 Pet Lane",
      phone_number: "555-901-2345",
      email: "info@petparadise.com",
      password: "petpass123",
      products: [],
      orders: [],
    },
    {
      name: "Beauty Bliss",
      description: "Beauty and skincare products",
      address: "456 Beauty Street",
      phone_number: "555-345-6789",
      email: "info@beautybliss.com",
      password: "beautypass123",
      products: [],
      orders: [],
    },
    {
      name: "Gourmet Delights",
      description: "Delicious gourmet food and treats",
      address: "789 Gourmet Avenue",
      phone_number: "555-678-9012",
      email: "info@gourmetdelights.com",
      password: "gourmetpass123",
      products: [],
      orders: [],
    },
  ]);

  const carts = await Cart.insertMany([
    // Cart data
    {
      user: users[0]._id,
      item: [
        {
          product: products[0]._id,
          quantity: 2,
        },
      ],
      totalAmount: 39.98,
    },
    {
      user: users[1]._id,
      item: [
        {
          product: products[1]._id,
          quantity: 3,
        },
      ],
      totalAmount: 149.97,
    },
    {
      user: users[2]._id,
      item: [
        {
          product: products[2]._id,
          quantity: 1,
        },
      ],
      totalAmount: 69.99,
    },
    {
      user: users[3]._id,
      item: [
        {
          product: products[3]._id,
          quantity: 2,
        },
      ],
      totalAmount: 39.98,
    },
    {
      user: users[4]._id,
      item: [
        {
          product: products[4]._id,
          quantity: 1,
        },
      ],
      totalAmount: 99.99,
    },
    {
      user: users[5]._id,
      item: [
        {
          product: products[5]._id,
          quantity: 1,
        },
      ],
      totalAmount: 999.99,
    },
    {
      user: users[6]._id,
      item: [
        {
          product: products[6]._id,
          quantity: 2,
        },
      ],
      totalAmount: 299.98,
    },
    {
      user: users[7]._id,
      item: [
        {
          product: products[7]._id,
          quantity: 3,
        },
      ],
      totalAmount: 449.97,
    },
    {
      user: users[8]._id,
      item: [
        {
          product: products[8]._id,
          quantity: 1,
        },
      ],
      totalAmount: 39.99,
    },
  ]);

  const orders = await Order.insertMany([
    // Order data
    {
      user: users[1]._id,
      item: [
        {
          product: products[1]._id,
          quantity: 3,
        },
      ],
      business: businesses[0]._id,
      total: 59.97,
    },
    {
      user: users[2]._id,
      item: [
        {
          product: products[2]._id,
          quantity: 2,
        },
        {
          product: products[3]._id,
          quantity: 1,
        },
      ],
      business: businesses[1]._id,
      total: 119.97,
    },
    {
      user: users[3]._id,
      item: [
        {
          product: products[4]._id,
          quantity: 1,
        },
      ],
      business: businesses[2]._id,
      total: 99.99,
    },
    {
      user: users[4]._id,
      item: [
        {
          product: products[5]._id,
          quantity: 1,
        },
      ],
      business: businesses[3]._id,
      total: 999.99,
    },
    {
      user: users[5]._id,
      item: [
        {
          product: products[6]._id,
          quantity: 2,
        },
      ],
      business: businesses[4]._id,
      total: 299.98,
    },
    {
      user: users[6]._id,
      item: [
        {
          product: products[7]._id,
          quantity: 3,
        },
      ],
      business: businesses[5]._id,
      total: 449.97,
    },
    {
      user: users[7]._id,
      item: [
        {
          product: products[8]._id,
          quantity: 1,
        },
      ],
      business: businesses[6]._id,
      total: 39.99,
    },
    {
      user: users[8]._id,
      item: [
        {
          product: products[9]._id,
          quantity: 2,
        },
      ],
      business: businesses[7]._id,
      total: 99.98,
    },
    {
      user: users[9]._id,
      item: [
        {
          product: products[10]._id,
          quantity: 1,
        },
      ],
      business: businesses[8]._id,
      total: 149.99,
    },
  ]);

  // Update associations
  for (const business of businesses) {
    business.products.push(...products);
    await business.save();
  }

  for (const user of users) {
    user.orders.push(...orders);
    await user.save();
  }

  console.log("Sample data seeded successfully.");

  process.exit();
});
