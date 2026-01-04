import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import generateToken from '../lib/utils.js';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ 
            fullname, 
            email, 
            password: hashedPassword 
        });

        await newUser.save();
        generateToken(res, newUser._id);

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};