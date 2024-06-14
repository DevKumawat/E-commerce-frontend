import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SendIcon from "@mui/icons-material/Send";
import { decreaseQuantity, increaseQuantity, removeItem, } from "../store/action/action";

const CartComp = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);

  const dispatch = useDispatch(); 

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };
  const handleDecreaseQunatity= (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemove = (itemId) =>{
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={8}>
          <Typography
            sx={{ marginTop: "25px" }}
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Shopping Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography variant="h5" textAlign="center">
              Your cart is empty
            </Typography>
          ) : (
            cart.map((item) => (
              <Paper key={item.id} elevation={4}>
                <Box
                  m={3}
                  pt={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box mr={3}>
                    <img src={item.image} height={100} width={80} alt={item.title} />
                  </Box>

                  <Box>
                    <Box textAlign="start">
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography color="text.secondary">
                        Price : ${item.total ? item.total.toFixed(2) : item.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Button
                      color="success"
                      sx={{ fontSize: "30px" }}
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      {" "}
                      +{" "}
                    </Button>
                    <Typography>{item.quantity ?  item.quantity : 1}</Typography>
                    <Button color="error" sx={{ fontSize: "30px" }}
                    onClick={() => handleDecreaseQunatity(item.id)}>
                      {" "}
                      -{" "}
                    </Button>
                  </Box>
                </Box>
                <Divider />
                <Box textAlign="center">
                  <Button
                    sx={{ margin: "15px" }}
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteForeverIcon />}
                    onClick= { ()=>handleRemove(item.id)}
                  >
                    Remove Item
                  </Button>
                </Box>
              </Paper>
            ))
          )}
          {cart.length > 0 && (
            <Box textAlign="center" margin="30px">
              <Button variant="contained" endIcon={<SendIcon />}>
                Proceed to Checkout
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default CartComp;
