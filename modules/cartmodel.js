const mongoose=require("mongoose")

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    quantity: {type: Number, default: 1, min: 1},
  },
  {
    timestamps: true,
  }
);


const Cartmodel = mongoose.model('cart', cartSchema);
module.exports=Cartmodel