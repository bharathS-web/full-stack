const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/quizDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Schema
const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String
});

const Quiz = mongoose.model('Quiz', quizSchema);

// Score Schema
const scoreSchema = new mongoose.Schema({
    username: String,
    score: Number,
    date: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', scoreSchema);

// Routes
app.get('/', async (req, res) => {
    const questions = await Quiz.find();
    res.render('quiz', { questions: questions });
});

app.post('/submit', async (req, res) => {
    const questions = await Quiz.find();
    let score = 0;

    questions.forEach(question => {
        if (req.body[question._id] === question.correctAnswer) {
            score++;
        }
    });

    // Save the score to the database
    const username = req.body.username || 'Anonymous'; // Get username from the request body
    const newScore = new Score({
        username: username,
        score: score
    });

    await newScore.save();

    res.render('result', { score: score, total: questions.length });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});