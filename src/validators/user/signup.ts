import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validationRules = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];


export const validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Promise?.all(validationRules?.map((rule) => rule?.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        next();
    } catch (err) {
        console.error('Exception occured in "validate" method of "signupValidator"!', err);
    }
};
