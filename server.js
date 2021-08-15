const express = require('express');
const path = require('path');
const Gpio = require('pigpio').Gpio;

const motor = new Gpio(10, {mode: Gpio.OUTPUT});

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
    return item;
});

let pulseWidth = 1000;
let increment = 100;

// var servoAngle = 0;

// function scale(value) {
//     new_angle = value / 270
// }


setInterval(() => {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 1000);

// app.post('/slider', (req, res) => {
//     var slide = req.body.newSlider;
//     console.log(slide);
//     res.redirect('/');
// })

// Tell the app which port to listen on 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
