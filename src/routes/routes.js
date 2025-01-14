import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
      .get(getProducts)
      .post(addnewProduct);
    
     app.route('/products/:ProductID')
      .get(getProductWithID)
      .put(updateProduct)
      .delete(deleteProduct);
}

export default routes;