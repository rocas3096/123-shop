const faker = require("faker");

const users = [];
const businesses = [];
const products = [];
const carts = [];
const orders = [];

// Generate fake data
for (let i = 0; i < 20; i++) {
  const user = {
    _id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone_number: faker.phone.phoneNumber(),
    vendor: faker.random.boolean(),
  };
  users.push(user);

  const business = {
    _id: faker.random.uuid(),
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    address: faker.address.streetAddress(),
    phone_number: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    products: [],
    orders: [],
  };
  businesses.push(business);

  const product = {
    _id: faker.random.uuid(),
    business_id: business._id,
    product_name: faker.commerce.productName(),
    product_description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    quantity: faker.random.number({ min: 1, max: 100 }),
  };
  products.push(product);

  const cart = {
    _id: faker.random.uuid(),
    user: users[i],
    item: [
      {
        _id: faker.random.uuid(),
        product: product,
        quantity: faker.random.number({ min: 1, max: 5 }),
      },
    ],
    totalAmount: parseFloat(faker.commerce.price()),
  };
  carts.push(cart);

  const order = {
    _id: faker.random.uuid(),
    user: users[i],
    item: [
      {
        _id: faker.random.uuid(),
        product: product,
        quantity: faker.random.number({ min: 1, max: 5 }),
      },
    ],
    business: business,
    total: parseFloat(faker.commerce.price()),
  };
  orders.push(order);

  business.products.push(product);
  business.orders.push(order);
}

module.exports = {
  users,
  businesses,
  products,
  carts,
  orders,
};
