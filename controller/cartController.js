const Cartmodel=require("../modules/cartmodel.js")
const Product=require("../modules/productModel.js")

const getCartData = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "unauthorised" });
  }
  try {
    const data = await Cartmodel.find({ userId: id });
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send({ message: "error occurred" });
  }
};

const postToCart = async (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).send({ message: "no valid data" });
  }
  const responce = new Cartmodel({ ...req.body });
  try {
    await responce.save();
    res.status(200).send("Added to cart");
  } catch (e) {
    console.log(e)
    res.status(400).send({ message: e.message });
  }
};

const incrementQty = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unautorize" });
  }
  try {
    const responce = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: 1 } },
      { new: true }
    );
    res.status(200).send(responce);
  } catch (e) {
    res.status(404).send({ message: "azdcsafdsafsadfdsfgdsfgdsfsf" });
  }
};

const decrementQty = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const responce = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: -1 } },
      { new: true }
    );
    res.status(200).send(responce);
  } catch (e) {
    res.status(404).send({ message: e });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const responce = await Cartmodel.deleteOne({ id: id });
    res.status(200).send(responce);
  } catch (e) {
    res.status(403).send({ message: e });
  }
};
module.exports={getCartData,postToCart,incrementQty,decrementQty,deleteProduct}