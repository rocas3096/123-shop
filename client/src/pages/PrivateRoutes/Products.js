import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { orderContext } from "../../context/orderContext";
import { GET_ALL_PRODUCTS_BY_BUSINESS } from "../../api/orderApi";
import { authUserContext } from "../../context/authUserContext";

function Products() {
  const { business } = useContext(authUserContext);
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_BUSINESS, {
    variables: { businessId: business && business.getBusinessByUser[0]._id },
  });
  console.log(business && business.getBusinessByUser[0]._id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: ${error.message}</p>;
  console.log({ data });
  return <div></div>;
}

export default Products;
