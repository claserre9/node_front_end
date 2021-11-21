const express = require('express');
const router = express.Router();
let users= require('../users.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Demo', users, mode: process.env.NODE_ENV});
});

module.exports = router;
