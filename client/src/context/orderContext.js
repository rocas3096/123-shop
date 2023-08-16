import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  CLOSE_ORDER,
  GET_ORDERS_BY_BUSINESS,
  NEW_ORDER_SUB,
} from "../api/orderApi";
import { authUserContext } from "./authUserContext";
import useSound from "use-sound";
import newOrderSound from "../assets/sounds/newOrder.wav";
export const orderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const { business } = useContext(authUserContext);
  const businessId = business && business.getBusinessByUser[0]._id;

  const {
    err: closedOrdersError,
    loading: closedOrdersLoading,
    data: closedOrders,
    refetch: refetchClosedOrders,
  } = useQuery(GET_ORDERS_BY_BUSINESS, {
    variables: {
      businessId: business && business.getBusinessByUser[0]._id,
      status: "CLOSED",
    },
  });
  const [closeOrder, { error: closingErr, loading: closingLoad }] =
    useMutation(CLOSE_ORDER);
  const [play] = useSound(newOrderSound);
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const { data, loading } = useSubscription(NEW_ORDER_SUB, {
    variables: { businessId },
    onSubscriptionData: (data) => {
      document.title = "New Order";
      play();
    },
  });

  useEffect(() => {
    if (data?.orderCreated) {
      if (orders && orders.length >= 1) {
        let currentStorage = JSON.parse(localStorage.getItem("orders"));
        currentStorage.unshift(data.orderCreated);
        setOrders((prev) => [data.orderCreated, ...prev]);
        localStorage.setItem("orders", JSON.stringify(currentStorage));
      } else {
        setOrders([data.orderCreated]);
        localStorage.setItem("orders", JSON.stringify([data.orderCreated]));
      }
    }
    // putting orders as a dependecy will cause infinite loop
  }, [data]);
  return (
    <orderContext.Provider
      value={{
        orders,
        businessId,
        setOrders,
        refetchClosedOrders,
        closedOrders,
        closeOrder,
      }}
    >
      {children}
    </orderContext.Provider>
  );
};
