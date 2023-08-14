import React, { useContext, useEffect, useState } from "react";
import "./VendorSetup.css";
import { v4 as uuid } from "uuid";
import ProductForm from "../components/ProductForm";
import InventoryDesktop from "../components/InventoryDesktop";
import InventoryMobile from "../components/InventoryMobile";
import { authUserContext } from "../context/authUserContext";
import { useNavigate } from "react-router-dom";
import WelcomeModal from "../components/WelcomeModal";
import { DrawersContext } from "../context/drawersContext";
import { CREATE_BULK_PRODUCTS } from "../api/userApi";
import { useMutation } from "@apollo/client";
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

  const [createMultipleProducts, { loading, error }] =
    useMutation(CREATE_BULK_PRODUCTS);
  const updateProduct = (updateProduct) => {
    const updatedItems = products.map((item) =>
      item.id === updateProduct.id ? { ...item, ...updateProduct } : item
    );
    setProducts(updatedItems);
  };
  const deleteProduct = (id) => {
    setProducts(
      products.find((item) => item.id === id)
        ? products.filter((item) => item.id !== id)
        : products
    );
  };
  const { welcomeModal, setWelcomeModal, toggleBackdrop } =
    useContext(DrawersContext);

  useEffect(() => {
    if (user && !user.getUser.first_time_log) {
      navigate("/vendor");
    } else {
      if (firstBusiness) {
        console.log({ firstBusiness });
        setWelcomeModal(true);
      }
    }
  }, [user, navigate, setWelcomeModal, firstBusiness]);
  const handleSubmit = (e) => {
    e.preventDefault();
    productFormData.id = uuid();
    productFormData.price = parseFloat(productFormData.price);
    setProducts((prevItems) => [productFormData, ...prevItems]);
    setProductFormData(INITIAL_STATE);
  };
  const handleProductSaveToDB = async () => {
    let noIdProducts = products.map((product) => {
      delete product.id;
      return product;
    });
    console.log({ noIdProducts });
    try {
      let results = await createMultipleProducts({
        variables: {
          productInput: {
            business_id: firstBusiness._id,
            products: noIdProducts,
          },
        },
      });
      console.log({ results });
    } catch (error) {
      console.error(error);
    }
  };
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
        <InventoryDesktop
          products={products}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
          handleProductSaveToDB={handleProductSaveToDB}
        />
        <InventoryMobile
          products={products}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
          handleProductSaveToDB={handleProductSaveToDB}
        />
      </div>
    </>
  );
}

export default VendorSetup;
