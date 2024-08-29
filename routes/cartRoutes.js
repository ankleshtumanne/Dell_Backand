const express=require("express")
const  cartRouter =express.Router();
const {
  getCartData,
  incrementQty,
  postToCart,
  decrementQty,
  deleteProduct,
} =require("../controller/cartController.js");
const Auth = require("../middleware/Auth.js");
// const router =express.Router();

cartRouter.get("/:id", getCartData);
cartRouter.post("/PostInCart",postToCart);
cartRouter.put("/inc/:id",incrementQty);
cartRouter.put("/dec/:id",decrementQty);
cartRouter.delete("/:id", deleteProduct);
module.exports=cartRouter