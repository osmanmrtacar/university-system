const express = require("express");
const router = express.Router();
const {item, manufacturer, person} = require("../models/");


router.post('/',(req, res, next)=>{
 
  if((req.body.name.length!==0 && req.body.name.length <21) && (!isNaN(req.body.price) && req.body.price.length<7)){
    req.body.price = Number.parseFloat(req.body.price)
      manufacturer.findOne({
        where:{
          id: req.body.manufacturerId
        }
      }).then(()=>{
        item.create(req.body)
        res.redirect('/items')
      })
      
  }
    else{
      res.redirect('/items');
    } 
})

router.get('/', (req,res, next)=>{
  
  
  item.findAll({
    include: [{
       model: manufacturer
      
    }],
    where:{
      status:true
    }
    
  })
    .then(results=>{
      let itemData = results;
      //res.json(itemData);
      return res.render('page', {data:itemData, title:"Items"}); 
      
  })
  .catch(err=>console.log(err));
 
});

router.get('/add', (req, res) => {
  res.render('add', {title:'items'});
})

router.post('/:id/delete', (req, res)=>{
  item.findOne({
    where:{
      id:req.params.id
    }
  }).then(results=>{
    results.update({
      status:false
    })
    res.redirect('/items');
  })
})
module.exports = router;

