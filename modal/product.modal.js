import mongoose from "mongoose";

const ProductModal = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  is_in_inventory: {
    type: Boolean,
  },
  items_left: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
});

const Product =
  mongoose.model.ProductModal || mongoose.model("Product", ProductModal);
export default Product;
