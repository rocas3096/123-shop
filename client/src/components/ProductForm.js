import React, { useState } from "react";
import Input from "./shared/Input";
import "./ProductForm.css";
function ProductForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ formData });
  // };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="add-product-form">
      <h1 className="add-product-form-title text-secondary">Step 2!</h1>
      <p className="add-product-form-sub-title">Add items to your menu</p>
      <div className="form-inputs">
        <Input
          handleChange={handleChange}
          title="Menu Item"
          name="product_name"
          value={formData.product_name}
        />
        <Input
          handleChange={handleChange}
          title="Item description"
          name="product_description"
          type="textarea"
          value={formData.product_description}
        />
        <div className="price-and-btn">
          <Input
            handleChange={handleChange}
            name="price"
            value={formData.price}
            title="Price"
            price={true}
          />
          <button className="py-2 text-white add-btn bg-teritary">Add</button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
