import React, { useEffect, useState } from "react";
import "./InventoryItem.css";
import Update from "./Update";
import Trash from "./Trash";
import Loading from "./Loading";
function InventoryItem({
  id,
  title,
  price,
  description,
  updateProduct,
  deleteProduct,
  cartProduct,
  formData,
  setFormData,
}) {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editFormData, setEditFormData] = useState({
    product_name: title,
    price,
    product_description: description,
  });
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    setEditFormData({
      product_name: title,
      price,
      product_description: description,
    });
  }, [title, price, description]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(id);
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const toggleEditMode = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditMode(true);
    }, 1200);
  };
  const handleSaveEdit = () => {
    setLoading(true);
    updateProduct({ _id: id, ...editFormData });
    setTimeout(() => {
      setLoading(false);
      setEditMode(false);
    }, 1200);
  };
  const handleInput = (e) => {
    console.log(e.target);
  };
  const handleDelete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRemove(true);
      setTimeout(() => {
        setRemove(false);
        deleteProduct(id);
      }, 300);
    }, 400);
  };
  return (
    <div
      className={`inventory-item ${editMode && "edit-mode"} ${
        remove && "remove"
      }`}
    >
      <Loading
        border={4}
        width={28}
        height={28}
        color="#0085FF"
        active={loading}
      />
      <div className="inventory-item-image">
        <img src={`https://source.unsplash.com/featured?${title}`} alt="" />
      </div>
      <div className="inventory-item-content">
        <div className="inventory-item-content-title">
          {editMode ? (
            <input
              onChange={handleChange}
              className="title-edit"
              name="product_name"
              value={editFormData.product_name}
              maxLength={40}
            />
          ) : (
            <p className="title-text" onInput={handleInput}>
              {title}
            </p>
          )}

          <p className="title-price">
            <span className="dollar-sign">$</span>

            {editMode ? (
              <input
                onChange={handleChange}
                className="price-edit"
                name="price"
                value={editFormData.price}
                maxLength={5}
              />
            ) : (
              <span>{price}</span>
            )}
          </p>
        </div>
        <div className="inventory-item-content-description">
          {editMode ? (
            <textarea
              onChange={handleChange}
              id="description"
              name="product_description"
              value={editFormData.product_description}
              maxLength={150}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
        {cartProduct && (
          <button
            onClick={() =>
              setFormData((prev) => [
                { price, item: title, description },
                ...prev,
              ])
            }
            className="add-to-cart-item"
          >
            Add to cart
          </button>
        )}
        <div className="inventory-item-btns">
          {editMode ? (
            <button onClick={handleSaveEdit} className="save-edit">
              Save
            </button>
          ) : cartProduct ? null : (
            <>
              <button onClick={toggleEditMode}>
                <Update width="16px" height="16px" />
              </button>
              <button onClick={handleDelete}>
                <Trash width="16px" height="18px" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InventoryItem;
