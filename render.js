const axios = require('axios');


exports.home = (req, res) => {
    res.render('home');
}

exports.about = (req, res) =>{
    res.render('about');
}
exports.cal = (req, res) =>{
    res.render('fit_cal');
}

exports.contact = (req, res) =>{
    res.render('contact');
}
