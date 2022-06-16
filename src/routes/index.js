const express = require('express');
const router = express.Router();
const pool = require('../database');

let people={
    id:0,
    code:' ',
    namePerson:' ',
    type:' ',
    statusPerson:0,
    picture:' ',
    mail:' ',
    password:' ',
    address:' ',
    cel:' ',
    preferences:' ',
    age:0
}

router.get('/', async (req, res)=> {
   res.render('html/login.html')
})


router.post('/', function (req, res) {
    console.log(req.body)
    res.render('html/AdminInicio.html')
})

module.exports = router;