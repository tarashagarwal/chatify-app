import express from 'express';
const router = express.Router();
import { signup } from '../src/controllers/auth.controller.js';

router.post('/login', (req, res) => {
    res.send('Login Endpoint');
});

router.post('/logout', (req, res) => {
    res.send('Logout Endpoint');
});

router.post('/signup',signup);

export default router;