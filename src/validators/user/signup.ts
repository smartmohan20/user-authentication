import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validationRules = [
    // Validate existence, non-emptiness, and string type for name field
    body('name')
    .exists()
        .withMessage('Name is required')
    .notEmpty()
        .withMessage('Name cannot be empty')
    .isString()
        .withMessage('Name must be a string'),

    // Validate existence, non-emptiness, and string type for email field
    body('email')
        .exists()
            .withMessage('Email is required')
        .notEmpty()
            .withMessage('Email cannot be empty')
        .isString()
            .withMessage('Email must be a string')
        .isEmail()
            .withMessage('Invalid email format')
        .normalizeEmail(),

    // Validate existence, non-emptiness, and string type for password field
    body('password')
    .exists()
        .withMessage('Password is required')
    .notEmpty()
        .withMessage('Password cannot be empty')
    .isString()
        .withMessage('Password must be a string')
    .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
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
