import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

app.get('/api/auth/login', (req, res) => {
    res.send('Signup Login');
});

app.get('/api/auth/logout', (req, res) => {
    res.send('Signup Logout');
});

app.get('/api/auth/signup', (req, res) => {
    res.send('Signup Endpoint');
});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});