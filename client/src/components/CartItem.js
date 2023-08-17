import React, { useEffect, useState } from "react";
import "./CartItem.css";
function CartItem({ _id, title, price, description, setQuantity }) {
  const [q, setQ] = useState(1);
  const [total, setTotal] = useState(price);
  const handleChange = (e) => {
    const { value } = e.target;
    if (parseInt(value) <= 0) {
      setQuantity(0);
      setQ(0);
    }

    setQ(value);
    setQuantity(_id, q);
  };
  const inc = () => {
    setQ(q + 1);
    setQuantity(_id, q);
  };
  const dec = () => {
    setQ(q - 1);
    setQuantity(_id, q);
  };
  useEffect(() => {
    setTotal(price * q);
  }, [q]);
  return (
    <div className="cart-item">
      <div className="image">
        <img src={`https://source.unsplash.com/featured?${title}`} alt="" />
      </div>
      <div className="info">
        <div className="head">
          <p className="title">{title}</p>
          <p className="price">${total.toFixed(2)}</p>
        </div>
        <div className="body">
          <p className="description">{description}</p>
          <div className="quantity">
            <div onClick={dec} className="dec bg-secondary">
              -
            </div>
            <input
              onChange={handleChange}
              defaultValue={1}
              type="number"
              value={q}
            />
            <div onClick={inc} className="inc bg-secondary">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
