const express=require("express")
const productRouter=express.Router()
const Product =require("../modules/productModel")

// Get all products

productRouter.get("/getProduct",async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//post a product
productRouter.post("/postProduct",async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({message:"post data successfull",product});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get single product
productRouter.get("/getSingleProduct/:id",async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch(err) {
    res.status(500).json({ message: "error occured",err});
  }
});

module.exports=productRouter