import React, { useEffect, useState } from "react";
import ProductList from "./productList";




const Homepage = ()=>{
    const [products, setProducts] = useState([]);

    const getProductData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json();
      setProducts(result);
    //   console.log(result);
    };
  
    useEffect(() => {
      getProductData();
    }, []);
  
    
    return(
        <>
        
        <ProductList products={products}/>
        
          
        </>
    )
};
export default Homepage;