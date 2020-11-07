import Products from '../models/Products';

export const createProduct = async (req, res) => {
    const newProduct = new Products(req.body);
    const productSaved = await newProduct.save();
    res.status(200).json(productSaved);
};

export const getProducts = async (req, res) => {
    const product = await Products.find();
    res.status(200).json(product);
};

export const getProductById = async (req, res) => {
    const product = await Products.findById(req.params.productId);
    res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
    const updateProduct = await Products.findOneAndUpdate(req.params.productId, req.body, {new: true});
    res.status(200).json(updateProduct);
};

export const deleteProductById = async (req, res) => {
    await Products.findByIdAndDelete(req.params.productId);
    res.status(200).json('Delete Product');
};