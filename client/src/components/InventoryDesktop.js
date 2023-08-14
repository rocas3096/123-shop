import React from "react";
import "./InventoryDesktop.css";
import InventoryItem from "./shared/InventoryItem";
function InventoryDesktop({ products, updateProduct }) {
  const handleSave = () => {
    console.log(products);
  };
  return (
    <div className="inventory desktop">
      <h2 className="inventory-title text-[26px]  py-[8px]  text-center">
        Inventory
      </h2>
      <div className="scrollable-container">
        {products.map((product) => (
          <InventoryItem
            key={product.id}
            id={product.id}
            title={product.product_name}
            description={product.product_description}
            price={product.price}
            updateProduct={updateProduct}
          />
        ))}
      </div>
      <div className="inventory-footer">
        <button
          onClick={handleSave}
          className="text-white bg-secondary start-selling"
        >
          Start Selling →
        </button>
      </div>
    </div>
  );
}

export default InventoryDesktop;
