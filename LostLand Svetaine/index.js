const express = require('express');
const path = require('path');
const app = express();
const config = require('./config.json');
const formRoutes = require('./routes/form');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/form', formRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => console.log('Server started on port 3000'));