import React, { useEffect, useState } from "react";
import "./InventoryItem.css";
import Update from "./Update";
import Trash from "./Trash";
import Loading from "./Loading";
function InventoryItem({ id, title, price, description, updateProduct }) {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editFormData, setEditFormData] = useState({
    product_name: title,
    price,
    product_description: description,
  });
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
    updateProduct({ id, ...editFormData });
    setTimeout(() => {
      setLoading(false);
      setEditMode(false);
    }, 1200);
  };
  const handleInput = (e) => {
    console.log(e.target);
  };
  return (
    <div className={`inventory-item ${editMode && "edit-mode"}`}>
      <Loading
        border={4}
        width={28}
        height={28}
        color="#0085FF"
        active={loading}
      />
      <div className="inventory-item-image">
        <img src={`https://source.unsplash.com/100x140?${title}`} alt="" />
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
            $
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
        <div className="inventory-item-btns">
          {editMode ? (
            <button onClick={handleSaveEdit} className="save-edit">
              Save
            </button>
          ) : (
            <>
              <button onClick={toggleEditMode}>
                <Update width="16px" height="16px" />
              </button>
              <button>
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
