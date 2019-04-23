const express = require("express");
const router = express.Router();
const {manufacturer} = require("../models/");

router.post('/', (req, res, next)=>{
  if(req.body.name.length!==0){
    manufacturer.create(req.body);
    res.redirect('/manufacturers');
  }
  else{
    res.redirect('/manufacturers');
  }
  
})

router.get('/', (req,res, next)=>{
    manufacturer.findAll({
      where:{
      status:true
    }
    }).then(results=>{
      let manuData = results;
      return res.render('page', {data:manuData, title:"Manufacturers"});
      
  })
})

router.get('/add', (req, res) => {
    
  res.render('add', {title: "manufacturers"});
})

router.post('/:id/delete', (req, res)=>{
  manufacturer.findOne({
    where:{
      id:req.params.id
    }
  }).then(results=>{
    results.update({
      status:false
    })
    res.redirect('/manufacturers');
  })
})
module.exports = router;