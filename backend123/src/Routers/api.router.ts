import express from 'express';
import ProductController from '../controller/product.controller';
const router = express.Router();

router.get('/products', (req, res) => {
  ProductController.getAll(req, res);
});
router.post('/products/store', (req, res) => {
  ProductController.addItem(req, res);
});
router.post('/updateProduct/:id', (req, res) => {
  ProductController.updateUpdate(req, res);
});
router.delete('/product/:id', (req, res) => {
  ProductController.deleteOne(req, res);
});
export default router;
