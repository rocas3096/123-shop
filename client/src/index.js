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
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { AuthContextProvider } from "./context/authFormContext";
import PrivateRoute from "./components/shared/PrivateRoute";
import { AuthUserContextProvider } from "./context/authUserContext";
import AddProducts from "./pages/AddProducts";
import VendorTemplate from "./pages/VendorTemplate";
import VendorSetup from "./pages/VendorSetup";
import { ApolloProvider } from "@apollo/react-hooks";
import { DrawersContextProvider } from "./context/drawersContext";
import Home from "./pages/Home";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const path = window.location.pathname;
const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:3001/graphql",
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
  <ApolloProvider client={client}>
    <React.StrictMode>
      <AuthUserContextProvider>
        <AuthContextProvider>
          <DrawersContextProvider>
            <RouterProvider router={router} />
          </DrawersContextProvider>
        </AuthContextProvider>
      </AuthUserContextProvider>
    </React.StrictMode>{" "}
  </ApolloProvider>
);
