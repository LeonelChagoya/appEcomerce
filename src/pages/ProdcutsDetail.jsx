import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";

const ProdcutsDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navige=useNavigate();

  useEffect(() => {
    const productsFind = allProducts.find(
      (productsItem) => productsItem.id === Number(id)
    );
    setProductDetail(productsFind);

    const filteredProducts = allProducts.filter(
      (productsItem) => productsItem.category.id === productsFind.category.id
    );

    setSuggestedProducts(filteredProducts);
    console.log(filteredProducts);
  }, [allProducts, id]);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  return (
    <div>
      <h1>Products Details</h1>
      <img
        className="productImage"
        src={productDetail?.productImgs?.[0]}
        alt=""
      />{" "}
      {suggestedProducts.map((products) => (
        <div key={products.id}
        onClick={()=>navige(`/product/${products.id}`)}
        >{products.title}</div>
      ))}
    </div>
  );
};

export default ProdcutsDetail;
