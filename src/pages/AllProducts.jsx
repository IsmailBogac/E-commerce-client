import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Product from "../components/Product";

function AllProducts() {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://e-commerce-production-69a7.up.railway.app/api/products"
    );
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <div className="container d-flex gap-3 mt-5 all-products">
        {data.map((d) => (
          <Product product={d} />
        ))}
      </div>
    </>
  );
}

export default AllProducts;
