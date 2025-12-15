const express = require('express');
const authRoutes = require('./routes/auth.routes');
const postsRoutes = require('./routes/posts.routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);





module.exports = app;
