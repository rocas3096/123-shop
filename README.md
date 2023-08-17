# 123 Shop!

## Description

Welcome to 123 shop where setting up your business is as easy as 1, 2, 3!! We are stripping down the requirements of getting your business online and available to everyone around you. Once your business is setup, you can add your products and business details, update your location, and let your customers know what you have available!

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [GraphQL API](#graphql-api)
- [Contributors](#contributors)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Make sure you have a running MongoDB instance)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-app.git
```

2. Install dependencies:

```bash
cd your-app
npm install
```

3. Create a `.env` file in the root directory of the project and configure your environment variables:

```env
MONGODB_URI=your-mongodb-uri
SECRET_KEY=your-secret-key
```

Replace `your-mongodb-uri` with your MongoDB connection URI and `your-secret-key` with a secret key for JWT token generation.

4. Start the server:

```bash
npm start
```

The server will start at http://localhost:3001 by default.

## Usage

After starting the server, you can navigate to http://localhost:3001/graphql to access the GraphQL Playground, which provides an interactive interface for testing the API.

You can also check out our deployed application on [Heroku!](https://www.heroku.com/home)

## GraphQL API

123-Shop uses GraphQL for its API. The GraphQL schema includes the following types:

- `User`: Represents a user in the system.
- `Product`: Represents a product that can be associated with a business.
- `Business`: Represents a business that users can create.
- `Cart`: Represents a user's shopping cart.
- `Order`: Represents an order placed by a user.

You can find the full schema and usage examples in the `typedefs.js` file.

## Contributors

 - [@PierSalloum](https://github.com/PierSalloum)
 - [@rocas3096](https://github.com/rocas3096)
 - [@RandyYanish](https://github.com/RandyYanish)
 - [@jimenez2society](https://github.com/jimenez2society)
 - [@miguela14](https://github.com/miguela14)
 - [@hani](https://github.com/hani)

## License

This project is licensed under the [MIT License](LICENSE).
