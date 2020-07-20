const express = require('express');

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

//Connect To Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/meals', require('./routes/meals'));
app.use('/api/foodlog', require('./routes/foodLog'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/detection', require('./routes/detection'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
