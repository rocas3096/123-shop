import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./BusinessMenu.css";
import InventoryItem from "../components/shared/InventoryItem";
import CartItem from "../components/CartItem";
import { authUserContext } from "../context/authUserContext";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_PRODUCTS_BY_BUSINESS,
  PLACE_ORDER_MUTATION,
} from "../api/orderApi";
function BusinessMenu() {
  const { business_id } = useParams();
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_BUSINESS, {
    variables: { businessId: business_id },
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [
    placeOrder,
    {
      data: placeOrderData,
      loading: placeOrderDataLoading,
      error: placeOrderError,
    },
  ] = useMutation(PLACE_ORDER_MUTATION);
  const setQuantity = (id, qty) => {
    let arr = formData.map((item) =>
      item._id === id ? { ...item, quantity: qty } : item
    );
    setFormData(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.map((d) => (d.price = parseFloat(d.price)));
    formData.map((d) => delete d.description);
    formData.map((d) => {
      if (d.quantity >= 1 || !d.quantity) {
        d.quantity = 1;
      }
      return d.quantity;
    });
    console.log({ formData });
    placeOrder({
      variables: {
        placeOrderInput: {
          business: business_id,
          orderDetails: formData,
        },
      },
    });
    setFormData([]);
    setCartOpen(false);
  };
  if (placeOrderDataLoading) return <p>Loading...</p>;
  if (placeOrderError) return <p>Error: {placeOrderError.message}</p>;

  console.log({ business_id });
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      {/* active */}
      <form
        onSubmit={handleSubmit}
        className={`cart-modal ${cartOpen && "active"}`}
      >
        <div className="cart-modal-header">
          <p>
            {formData.length === 0
              ? "No Items"
              : `Cart - ${formData.length} items`}
          </p>
          <div
            // handle modal
            onClick={() => setCartOpen(false)}
            className={`exit-cart active`}
          >
            X
          </div>
        </div>
        <div className="cart-body">
          {formData.map((item) => {
            console.log(item);
            return (
              <CartItem
                _id={item._id}
                title={item.item}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                setQuantity={setQuantity}
              />
            );
          })}
        </div>
        <div className="checkout-btn">
          <button>Checkout</button>
        </div>
      </form>
      <div className="BusinessMenu">
        <div className="BusinessMenu-container">
          <div className="bg-secondary BusinessMenu-header">
            <h3 className="Products-header-title">Inventory</h3>
          </div>
          <div className="BusinessMenu-scrollable">
            {data?.getAllProdcutsByBusiness?.map((product) => {
              return (
                <InventoryItem
                  formData={formData}
                  setFormData={setFormData}
                  cartProduct
                  key={product._id}
                  id={product._id}
                  title={product.product_name}
                  description={product.product_description}
                  price={product.price}
                  // updateProduct={updateProductFn}
                  // deleteProduct={deleteProductFn}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div onClick={() => setCartOpen(true)} className="cart-toggler">
        {formData.length !== 0 ? (
          <div className="count">{formData.length}</div>
        ) : (
          ""
        )}

        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke="#fff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

export default BusinessMenu;
