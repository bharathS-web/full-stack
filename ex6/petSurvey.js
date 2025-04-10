const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/surveyDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Schema
const surveySchema = new mongoose.Schema({
    name: { type: String, required: true },
    pet: { type: String, required: true },
    reason: { type: String, required: true }
});

const Survey = mongoose.model('Survey', surveySchema);

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', async (req, res) => {
    const newSurvey = new Survey({
        name: req.body.name,
        pet: req.body.pet,
        reason: req.body.reason
    });

    try {
        await newSurvey.save();
        res.redirect('/results');
    } catch (error) {
        console.error('Error saving survey:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/results', async (req, res) => {
    try {
        const responses = await Survey.find();
        res.render('results', { responses: responses });
    } catch (error) {
        console.error('Error fetching results:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});