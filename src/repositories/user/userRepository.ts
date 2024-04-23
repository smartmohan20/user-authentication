import User from '../../database/models/User';
import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY, TOKEN_EXPIRY } from '../../config/jwtConfig';

// Method to add grocery item
export const signup = async (name: string, email: string, password: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to signup!',
            data: {},
            errors: []
        };

        const user = await User.create({ name, email, password });
        if (user) {
            objRes.statusCode = 201;
            objRes.message = 'Signup successful!';
            objRes.data = user;
        }

        return objRes;
    } catch (err) {
        console.error('Exception occured in "signup" method of "userRepository"!', err);
    }
};
