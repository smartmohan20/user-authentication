import User from '../../database/models/User';

// Method to add grocery item
export const signup = async (email: string, password: string) : Promise<any> => {
    try {
        let objRes = {
            statusCode: 400,
            message: 'Failed to signup!',
            data: {},
            errors: []
        };

        const user = await User.create({ email, password });
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
