import { Request, Response } from 'express';
import { ISErrorRes } from '../../common/common';
import { signup } from '../../repositories/user/userRepository';

// Controller to signup
export const signupController = async (req: Request, res: Response) : Promise<void> => {
  try {
    let objRes = ISErrorRes;
    const { email, password } = req.body;
    const objSignupRes = await signup(email, password);
    if (objSignupRes && objSignupRes.statusCode) {
      objRes = objSignupRes;
    }

    // Send response with status code
    res.status(objRes.statusCode).json(objRes);
  } catch (err) {
    console.error('Exception occured in "signupController" method of "userController"!', err);
  }
};
