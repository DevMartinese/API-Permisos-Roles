import * as productsController from '../controllers/productsController'
import { authJwt } from '../middlewares';
import { Router } from 'express';
const router = Router();

router.post('/',
           [authJwt.verifyToken, authJwt.isModerator], 
           productsController.createProduct
);

router.get('/',
           productsController.getProducts
);

router.get('/:productId',
           productsController.getProductById
);

router.put('/:productId',
           [authJwt.verifyToken, authJwt.isAdmin],
           productsController.updateProductById
);

router.delete('/:productId',
              [authJwt.verifyToken, authJwt.isAdmin],
              productsController.deleteProductById
);

export default router;