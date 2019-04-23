const express = require("express");
const router = express.Router();
const {person} = require("../models/");

router.post('/', (req, res, next)=>{
  if(req.body.name.length!==0){
    person.create(req.body);
    res.redirect('/persons')
  }
  else{
    res.redirect('/persons');
  }
});

router.get('/', (req, res, next)=>{
    person.findAll({
      where:{
      status:true
    }
    }).then(results=>{
      let personData = results;
      return res.render('page', {data:personData, title:"Persons"});
      
  })
})

router.get('/add', (req, res) => {
    
  res.render('add', {title:'persons'});
})

router.post('/:id/delete', (req, res)=>{
  person.findOne({
    where:{
      id:req.params.id
    }
  }).then(results=>{
    results.update({
      status:false
    })
    res.redirect('/persons');
  })
})
module.exports = router;
