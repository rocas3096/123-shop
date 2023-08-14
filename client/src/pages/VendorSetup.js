import React, { useContext, useEffect, useState } from "react";
import AuthForm from "../components/shared/AuthForm";
import Input from "../components/shared/Input";
import "./VendorSetup.css";
import { v4 as uuid } from "uuid";
import ProductForm from "../components/ProductForm";
import InventoryDesktop from "../components/InventoryDesktop";
import InventoryMobile from "../components/InventoryMobile";
import { authUserContext } from "../context/authUserContext";
import { useNavigate } from "react-router-dom";
import WelcomeModal from "../components/WelcomeModal";
import { DrawersContext } from "../context/drawersContext";
function VendorSetup() {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    product_name: "",
    product_description: "",
    price: "",
  };
  const { user, business } = useContext(authUserContext);
  const [productFormData, setProductFormData] = useState(INITIAL_STATE);
  const [products, setProducts] = useState([]);
  const firstBusiness = business?.getBusinessByUser[0];
  const updateProduct = (updateProduct) => {
    const updatedItems = products.map((item) =>
      item.id === updateProduct.id ? { ...item, ...updateProduct } : item
    );
    setProducts(updatedItems);
  };
  const { welcomeModal, setWelcomeModal, toggleBackdrop } =
    useContext(DrawersContext);

  useEffect(() => {
    if (user && !user.getUser.first_time_log) {
      navigate("/vendor");
    } else {
      if (firstBusiness) {
        setWelcomeModal(true);
      }
    }
  }, [user, navigate, setWelcomeModal, firstBusiness]);
  const handleSubmit = (e) => {
    e.preventDefault();
    productFormData.id = uuid();
    setProducts((prevItems) => [productFormData, ...prevItems]);
    setProductFormData(INITIAL_STATE);
  };
  console.log(products);
  return (
    <>
      <div className={`modal-bd ${welcomeModal && "active"}`}></div>
      <div className="VendorSetup">
        <WelcomeModal
          business_name={business && firstBusiness?.business_name}
        />
        <ProductForm
          formData={productFormData}
          setFormData={setProductFormData}
          onSubmit={handleSubmit}
        />
        <InventoryDesktop products={products} updateProduct={updateProduct} />
        <InventoryMobile />
      </div>
    </>
  );
}

export default VendorSetup;
