import React, { useContext, useEffect } from "react";
import "./PastOrders.css";
import OrderContainer from "../../components/shared/OrdersContainer";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_ORDERS_BY_BUSINESS } from "../../api/orderApi";
import { authUserContext } from "../../context/authUserContext";
import OrderCard from "../../components/VendorPanel/OrderItem";
import { orderContext } from "../../context/orderContext";
function PastOrders() {
  const { business } = useContext(authUserContext);
  const {
    err: closedOrdersError,
    loading: closedOrdersLoading,
    data,
    refetch,
  } = useQuery(GET_ORDERS_BY_BUSINESS, {
    variables: {
      businessId: business && business.getBusinessByUser[0]._id,
      status: "CLOSED",
    },
  });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <OrderContainer>
      {data &&
        data?.getOrdersByBusiness.map((d) => {
          return (
            <OrderCard
              key={d._id}
              order={d}
              btnTitle="COMPLETED"
              completed={true}
            />
          );
        })}
    </OrderContainer>
  );
}

export default PastOrders;
