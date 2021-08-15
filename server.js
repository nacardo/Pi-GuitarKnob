const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
// var volumes = require('Volumes');


const app = express();

// Set port to env var or 5000
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', () => console.log('new line'));

app.post('/vol', (req, res) => {
    var item = req.body.slide;
    console.log(item);
    res.redirect('/');
});

// app.post('/slider', (req, res) => {
//     var slide = req.body.newSlider;
//     console.log(slide);
//     res.redirect('/');
// })

// Tell the app which port to listen on 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));