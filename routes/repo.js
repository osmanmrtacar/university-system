var express = require('express');
var router = express.Router();
const {item} =  require("../models/");


router.get('/', function(req, res, next) {
    
    item.findAll({
        where:{
            status:false
        }
    }).then(results=>{
        res.render('page', { data: results, title: 'repo' });
    })
});

module.exports = router;
