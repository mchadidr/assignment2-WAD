const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Marketplace', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
