import express from 'express';
import { signupController} from '../../controllers/user/userController';
import { loginController } from '../../controllers/user/userController';
import { signupValidator } from '../../validators/user/user';
import { loginValidator } from '../../validators/user/user';

const userRouter = express.Router();

userRouter.post('/signup', signupValidator, signupController);
userRouter.post('/login', loginValidator, loginController);

export default userRouter;
