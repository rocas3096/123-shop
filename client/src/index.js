import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Auth from "./pages/Auth";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { AuthContextProvider } from "./context/authFormContext";
import PrivateRoute from "./components/shared/PrivateRoute";
import { AuthUserContextProvider } from "./context/authUserContext";
import AddProducts from "./pages/AddProducts";
import VendorTemplate from "./pages/VendorTemplate";
import VendorSetup from "./pages/VendorSetup";
import { DrawersContextProvider } from "./context/drawersContext";

import Home from "./pages/Home";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "@apollo/client/utilities";
const path = window.location.pathname;

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
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
      {
        path: "vendor",
        element: <PrivateRoute component={<VendorTemplate />} navigateTo="/" />,
        children: [
          {
            path: "setup",
            element: (
              <PrivateRoute component={<VendorSetup />} navigateTo="/" />
            ),
          },
        ],
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
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthUserContextProvider>
        <AuthContextProvider>
          <DrawersContextProvider>
            <RouterProvider router={router} />
          </DrawersContextProvider>
        </AuthContextProvider>
      </AuthUserContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
