const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/details')
    .then(() => console.log("Connected...!"));

// Schema
const surveySchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true }
});

const Survey = mongoose.model('details', surveySchema);



// Routes
app.get('/', (req, res) => {
    res.render('details'); // your form page
});


app.post('/submit', async (req, res) => {
    const newSurvey = new Survey({
        name: req.body.name,
        age: req.body.age
    });

    await newSurvey.save();
    res.redirect('/results');
    
});


app.get('/results', async (req, res) => {

        const allEntries = await Survey.find();
        res.render('detailsRes', { entries: allEntries }); 

});


app.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002`);
});
