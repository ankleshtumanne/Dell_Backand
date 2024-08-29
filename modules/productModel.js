const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
  prodEyesBanner: { type: String },
  prodEyesHeading: { type: String },
  ImageUrl: { type: String },
  Title: { type: String },
  Price: { type: Number },
  Rating: { type: Number },
  RatingTotal: { type: String },
  MainCategory: { type: String },
  category: { type: String },
  Currency: { type: String },
});

 const Product = mongoose.model("Product", productSchema);
 module.exports=Product