// packages
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/react-hooks";

import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
// css
import "./index.css";
// context
import { AuthContextProvider } from "./context/authFormContext";
import { AuthUserContextProvider } from "./context/authUserContext";
import { DrawersContextProvider } from "./context/drawersContext";

// components
import App from "./App";
import Auth from "./pages/Auth";
import PrivateRoute from "./components/shared/PrivateRoute";
import VendorTemplate from "./pages/PrivateRoutes/VendorTemplate";
import VendorSetup from "./pages/PrivateRoutes/VendorSetup";
import Home from "./pages/Home";
import VendorPanel from "./pages/PrivateRoutes/VendorPanel";
import Orders from "./pages/PrivateRoutes/Orders";
import { OrderProvider } from "./context/orderContext";
import PastOrders from "./pages/PrivateRoutes/PastOrders";
import Products from "./pages/PrivateRoutes/Products";

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql" || "/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:3001/graphql" || `wss://${window.location.host}/graphql`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "vendor",
    element: <PrivateRoute component={<VendorTemplate />} navigateTo="/" />,
    children: [
      {
        path: "",
        element: <PrivateRoute component={<VendorPanel />} navigateTo="/" />,
        children: [
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "past-orders",
            element: <PastOrders />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "account",
          },
        ],
      },
      {
        path: "setup",
        element: <PrivateRoute component={<VendorSetup />} navigateTo="/" />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <AuthUserContextProvider>
        <OrderProvider>
          <AuthContextProvider>
            <DrawersContextProvider>
              <RouterProvider router={router} />
            </DrawersContextProvider>
          </AuthContextProvider>
        </OrderProvider>
      </AuthUserContextProvider>
    </React.StrictMode>
  </ApolloProvider>
);
