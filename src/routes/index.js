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


router.post('/', async (req, res) =>{
    console.log(req.body)
    let email=req.body.email
    let password=req.body.password
    await pool.query(`INSERT INTO people (id,email,password) VALUES (0,"${email}","${password}")`);
    res.render('html/login.html')
})

module.exports = router;
