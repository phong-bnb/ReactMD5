import Product from '../models/schemas/product.schema';
class ProductController {
  static async getAll(req, res) {
    try {
      console.log(req.query.isNew);
      let products = await Product.find(
        req.query.all === 'true'
          ? {}
          : {
              isNewProduct: req.query.isNew === 'true' ? true : { $ne: true },
            }
      ).sort({ createdAt: -1 });
      if (products) {
        res.status(200).json(products);
      }
    } catch (err) {
      console.log(err);
    }
  }
  static async addItem(req, res) {
    const { name, image, description, isNew } = req.body;
    let addItem = await Product.findOne({ name: name });
    if (!addItem) {
      await Product.create({
        name: name,
        image: image,
        description: description,
        isNewProduct: isNew,
      });
      res.status(200).json({
        message: 'add thanh cong',
      });
    } else {
      res.status(500).json({
        message: 'ngu ngu ',
      });
    }
  }
  static async updateUpdate(req, res) {
    const { name, image, description } = req.body;
    let updateItem = await Product.findOne({ _id: req.params.id });
    if (updateItem) {
      (updateItem.name = name),
        (updateItem.image = image),
        (updateItem.description = description);
    }
    await updateItem.save();
    res.json({
      message: 'ngu ngu ',
    });
  }

  static async deleteOne(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    res.json({
      message: 'deleted',
    });
  }
}
export default ProductController;
