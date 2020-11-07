import * as userController from '../controllers/userController';
import { authJwt, verifySingup } from '../middlewares';
import { Router } from 'express';
const router = Router();

router.post('/',
            [
                authJwt.verifyToken,
                authJwt.isAdmin,
                verifySingup.checkRoles
            ],
            userController.createUser
);

router.get('/',
            userController.getUsers
)

export default router;