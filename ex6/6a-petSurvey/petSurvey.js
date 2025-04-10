const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/surveyDB')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB Connection Error:', err));
// Schema
const surveySchema = new mongoose.Schema({
name: String,
pet: String,
reason: String
});
const Survey = mongoose.model('Survey', surveySchema);
// Routes
app.get('/', (req, res) => {
    res.render('index');
    });
    app.post('/submit', (req, res) => {
    const newSurvey = new Survey({
    name: req.body.name,
    pet: req.body.pet,
    reason: req.body.reason
    });
    newSurvey.save().then(() => res.redirect('/results'));
    });
    app.get('/results', async (req, res) => {
    const responses = await Survey.find();
    res.render('results', { responses: responses });
    });
    app.listen(3000, () => {
    console.log('Server running on port 3000');
    });