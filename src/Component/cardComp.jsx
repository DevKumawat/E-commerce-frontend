import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { addToCart } from "../store/action/action";
import { useDispatch, useSelector } from "react-redux";
import StarsIcon from '@mui/icons-material/Stars';

export default function CardComp({ product }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart);
  const cart = value.cartItems;
  // console.log(cart);

  const isItemInCart = () => {
    return cart.some((eachobj) => eachobj.id == product.id);
  };

  return (
    <Card sx={{ maxWidth: 313, m: 1 ,pt:"10px" ,boxShadow: "1px 0px 3px 1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 4px rgba(0,0,0,0.12)" , backgroundColor:"snow" , borderRadius:"8px" }}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.split(" ").slice(0 , 5).join(" ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.split(" ").slice(0 , 18).join(" ")}...
          </Typography>
        </CardContent>
      </Link>

      <CardActions>
        <Button size="small">${product.price}</Button>

        {isItemInCart() ? (
          <Button size="small" disabled>Already Added</Button>
        ) : (
            
          <Button onClick={() => dispatch(addToCart(product))} size="small">
              Add To Cart
          </Button>
        )}

        <Button sx={{textAlign:'center'}} size="small"> <StarsIcon sx={{width:"20px" , marginRight:"12px" , color:"orange"}}/> {product.rating.rate} 
        </Button>
      </CardActions>
    </Card>
  );
}
