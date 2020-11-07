import * as authController from '../controllers/authController';
import { Router } from 'express';
import { verifySingup } from '../middlewares';
const router = Router();

router.post('/singup',
            [
                verifySingup.checkDuplicateUserOrEmail,
                verifySingup.checkRoles
            ],
            authController.singUp
);

router.post('/singin',   
            authController.singIn
);

export default router;