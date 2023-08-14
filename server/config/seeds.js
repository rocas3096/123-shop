const db = require("./connection");
const { User, Product, Business, Cart } = require("../models");

db.once("open", async () => {
  await Promise.all([
    User.deleteMany(),
    Product.deleteMany(),
    Business.deleteMany(),
    Cart.deleteMany(),
  ]);

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

  const businesses = await Business.insertMany([
    // Business data
    {
      user_id: users[0]._id,
      business_name: "Electronics Emporium",
      description: "Your one-stop shop for electronics",
      address: "123 Main Street",
      phone_number: "555-123-4567",
      email: "info@electronics.com",
      password: "businesspass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[1]._id,
      business_name: "Fashion Frenzy",
      description: "Trendy fashion store",
      address: "456 Fashion Avenue",
      phone_number: "555-987-6543",
      email: "info@fashionfrenzy.com",
      password: "fashionpass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[2]._id,
      business_name: "Home Essentials",
      description: "Everything you need for your home",
      address: "789 Homeware Street",
      phone_number: "555-456-7890",
      email: "info@homeessentials.com",
      password: "homepass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[3]._id,
      business_name: "Outdoor Adventures",
      description: "Outdoor gear and equipment",
      address: "234 Outdoor Way",
      phone_number: "555-789-0123",
      email: "info@outdooradventures.com",
      password: "outdoorpass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[4]._id,
      business_name: "Book Haven",
      description: "Wide selection of books",
      address: "567 Book Street",
      phone_number: "555-234-5678",
      email: "info@bookhaven.com",
      password: "bookpass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[5]._id,
      business_name: "Sports Galore",
      description: "Sports equipment and apparel",
      address: "890 Sports Avenue",
      phone_number: "555-567-8901",
      email: "info@sportsgalore.com",
      password: "sportspass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[6]._id,
      business_name: "Pet Paradise",
      description: "Supplies for your furry friends",
      address: "123 Pet Lane",
      phone_number: "555-901-2345",
      email: "info@petparadise.com",
      password: "petpass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[7]._id,
      business_name: "Beauty Bliss",
      description: "Beauty and skincare products",
      address: "456 Beauty Street",
      phone_number: "555-345-6789",
      email: "info@beautybliss.com",
      password: "beautypass123",
      products: [],
      orders: [],
    },
    {
      user_id: users[8]._id,
      business_name: "Gourmet Delights",
      description: "Delicious gourmet food and treats",
      address: "789 Gourmet Avenue",
      phone_number: "555-678-9012",
      email: "info@gourmetdelights.com",
      password: "gourmetpass123",
      products: [],
      orders: [],
    },
  ]);

  const products = await Product.insertMany([
    // Product data
    {
      business_id: businesses[0]._id,
      product_name: "T-shirt",
      product_description: "Comfortable cotton t-shirt",
      price: 19.99,
      quantity: 100,
    },
    {
      business_id: businesses[1]._id,
      product_name: "Jeans",
      product_description: "Classic denim jeans",
      price: 49.99,
      quantity: 50,
    },
    {
      business_id: businesses[2]._id,
      product_name: "Sneakers",
      product_description: "Stylish athletic sneakers",
      price: 69.99,
      quantity: 75,
    },
    {
      business_id: businesses[3]._id,
      product_name: "Backpack",
      product_description: "Durable and spacious backpack",
      price: 29.99,
      quantity: 60,
    },
    {
      business_id: businesses[4]._id,
      product_name: "Watch",
      product_description: "Elegant wristwatch",
      price: 99.99,
      quantity: 30,
    },
    {
      business_id: businesses[5]._id,
      product_name: "Laptop",
      product_description: "High-performance laptop",
      price: 999.99,
      quantity: 20,
    },
    {
      business_id: businesses[6]._id,
      product_name: "Headphones",
      product_description: "Wireless over-ear headphones",
      price: 149.99,
      quantity: 40,
    },
    {
      business_id: businesses[7]._id,
      product_name: "Smartphone",
      product_description: "Latest smartphone model",
      price: 699.99,
      quantity: 25,
    },
    {
      business_id: businesses[8]._id,
      product_name: "Sunglasses",
      product_description: "UV protection sunglasses",
      price: 39.99,
      quantity: 80,
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
    },
    {
      user: users[0]._id,
      item: [
        {
          product: products[1]._id,
          quantity: 3,
        },
      ],
    },
    {
      user: users[0]._id,
      item: [
        {
          product: products[2]._id,
          quantity: 1,
        },
      ],
    },
    {
      user: users[1]._id,
      item: [
        {
          product: products[3]._id,
          quantity: 2,
        },
      ],
    },
    {
      user: users[1]._id,
      item: [
        {
          product: products[4]._id,
          quantity: 4,
        },
        {
          product: products[5]._id,
          quantity: 1,
        },
      ],
    },
    {
      user: users[2]._id,
      item: [
        {
          product: products[6]._id,
          quantity: 2,
        },
      ],
    },
    {
      user: users[2]._id,
      item: [
        {
          product: products[7]._id,
          quantity: 1,
        },
        {
          product: products[8]._id,
          quantity: 3,
        },
      ],
    },
  ]);

  // Update associations
  for (const business of businesses) {
    business.products.push(...products);
    await business.save();
  }

  for (const user of users) {
    user.orders.push(...carts);
    await user.save();
  }

  console.log("Sample data seeded successfully.");

  process.exit();
});
