import Product from "../modal/product.modal.js";

export async function getAllProduct(req, res) {
  try {
    var product = await Product.find({});
    res.send({
      message: "Product Fetched Successfully",
      product,
      success: true,
    });
  } catch (e) {
    return res.status(500).send({
      message: "Server Error",
      success: false,
    });
  }
}

export async function addProduct(req, res) {
  var product = new Product({ ...req });
  product = await product.save();
  res.send({
    message: "Product Added Successfully",
    product,
    success: true,
  });
}
