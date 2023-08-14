import React, { useCallback, useContext, useEffect, useState } from "react";
import "./InventoryMobile.css";
import { DrawersContext } from "../context/drawersContext";
import Exit from "./shared/Exit";
import InventoryItem from "./shared/InventoryItem";
function InventoryMobile({ products, updateProduct, deleteProduct }) {
  const handleSave = () => {
    console.log(products);
  };
  const { setupInvActive, setSetupInvActive, toggleBackdrop } =
    useContext(DrawersContext);
  const [loading, setLoading] = useState(true);
  const [hideToggler, setHideToggler] = useState(false);
  const handleInventoryToggle = useCallback(
    (cond, load = true) => {
      if (load) {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setHideToggler(cond);
          setSetupInvActive(cond);
          toggleBackdrop(cond);
        }, 0);
      } else {
        setHideToggler(cond);
        setSetupInvActive(cond);
        toggleBackdrop(cond);
      }
    },
    [setSetupInvActive, toggleBackdrop]
  );
  useEffect(() => {
    if (!setupInvActive) {
      setHideToggler(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 590) {
        handleInventoryToggle(false);
      }
    });
  }, [handleInventoryToggle, setupInvActive]);
  // const toggle
  return (
    <>
      <div
        onClick={() => handleInventoryToggle(true)}
        className={`text-white inventory-toggle bg-secondary ${
          hideToggler && "hide"
        }`}
      >
        <h2 className="text-center ">
          View Current Inventory ({products.length})
        </h2>
      </div>
      <div className={`inventory mobile ${setupInvActive && "active"}`}>
        <div className="text-white bg-secondary inventory-mobile-header">
          <div className="title">
            <p>Inventory</p>
          </div>
          <div
            onClick={() => handleInventoryToggle(false, false)}
            className="exit"
          >
            <Exit width="20px" height="20px" stroke="white" />
          </div>
        </div>
        <div className="scrollable-container">
          {products.map((product) => (
            <InventoryItem
              key={product.id}
              id={product.id}
              title={product.product_name}
              description={product.product_description}
              price={product.price}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
        <div className="inventory-footer">
          <button className="text-white bg-secondary start-selling">
            Save & Start Selling →
          </button>
        </div>
      </div>
    </>
  );
}

export default InventoryMobile;
