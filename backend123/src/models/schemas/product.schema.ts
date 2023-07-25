import { Schema, Document, model } from 'mongoose';

const productSchema: Schema = new Schema(
  {
    name: String,
    image: String,

    description: String,

    isNewProduct: Boolean,
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);
export default Product;
