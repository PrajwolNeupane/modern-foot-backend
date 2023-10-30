import Product from "../modal/product.modal.js";

//Get All Product
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

//Get Produt By Category
export async function getProductByCategory(req, res) {
  try {
    let category = req.query.category;
    if (!category) {
      return res.status(500).send({
        message: "Category is required",
        success: false,
      });
    }
    var product = await Product.find({ category: category.toUpperCase() });
    if (product.length == 0) {
      return res.send({
        message: "No Product Found",
        product,
        success: true,
      });
    }
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

//Add Product
export async function addProduct(req, res) {
  var product = new Product({ ...req });
  product = await product.save();
  res.send({
    message: "Product Added Successfully",
    product,
    success: true,
  });
}
