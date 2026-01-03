import express from 'express';
const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Signup Endpoint');
});

router.post('/login', (req, res) => {
    res.send('Login Endpoint');
});

router.post('/logout', (req, res) => {
    res.send('Logout Endpoint');
});

export default router;