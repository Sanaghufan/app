const express = require('express');
const app= express();
const cors = require('cors');
const mongoDB = require('./db');
const authRoutes = require('./routes/Auth');
app.use(cors());

// Alternatively, to allow only a specific origin:
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
mongoDB();

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})
