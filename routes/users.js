var express = require('express');
var router = express.Router();
const {user} = require("../models/");

//Post a user
router.post('/', (req, res) => {
    if(req.body.name.length!==0){
        user.create(req.body)
        res.redirect('/users')
    }
    else{
        res.render('error', {error:'hata'});
    }
    
})

/* GET users listing. */
router.get('/', (req, res) => {
    
  user.findAll({
      where:{
      status:true
    }
  }).then(results=>{
      let userData = results;
      return res.render('page', {data:userData, title:"Users"});
      
  })
})

router.get('/add', (req, res) => {
    
  res.render('add', {title: 'users'});
})

router.post('/:id/delete', (req, res)=>{
  user.findOne({
    where:{
      id:req.params.id
    }
  }).then(results=>{
    results.update({
      status:false
    })
    res.redirect('/users');
  })
})


module.exports = router;
