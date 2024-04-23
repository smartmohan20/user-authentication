import express from 'express';
import { signupController} from '../../controllers/user/userController';
import { signupValidator } from '../../validators/user/user';

const userRouter = express.Router();

userRouter.post('/signup', signupValidator, signupController);

export default userRouter;
