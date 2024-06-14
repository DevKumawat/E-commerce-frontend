import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CardComp from "./cardComp";
import { red } from "@mui/material/colors";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Box m={2} pt={2} sx={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
        {currentProducts.map((product) => (
          <CardComp key={product.id} product={product} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" m={4}  sx={{ gap: 4 }}>
        <Button sx={{backgroundColor:"black"}}  variant="contained" size="small" onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <Button sx={{backgroundColor:"black"}} variant="contained" size="small" onClick={handleNextPage} disabled={currentPage === totalPages} >
          Next
        </Button>
        {/* <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button> */}
      </Box>
    </>
  );
};

export default ProductList;
