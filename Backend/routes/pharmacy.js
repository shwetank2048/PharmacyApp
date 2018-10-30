
var express = require('express');
var router = express.Router();
var fs=require('fs')
var path = require('path');
var list=require('../data/data.json')
var x = path.join(__dirname, '..' ,'/data/data.json');
router.get('/', function(req, res) {
  
	  var response=fs.readFileSync(x);
	  res.status(200).json({list:JSON.parse(response)});

});

//get by ID
router.get('/:id', function(req, res) {
  
	  var response=fs.readFileSync(x);
	  var parsed=JSON.parse(response);
	  var result=parsed.filter((ele)=>{
		  return ele.id===parseInt(req.params.id)})
	  res.status(200).json({obj:result});

});


// router.get('/create', function(req, res) {
	// res.render('pharmacy/create');
// });

router.post('/create', function(req, res) {
  var medi = {};
  medi.id = req.body.id;
  medi.name = req.body.name;
  medi.company = req.body.company;
  medi.manufacturingDate = req.body.manufacturingDate;
  medi.expiryDate = req.body.expiryDate;
  medi.price=req.body.price;
  medi.type=req.body.type;

  list.push(medi);
  try{
  fs.writeFileSync(x,JSON.stringify(list),'utf8')
  }
  catch(err)
  {
	  console.log(err);
  }
	  res.status(201).json({message:"Added successfully !"})
  
});


router.post('/edit/:id', function(req, res) {
  //var updatedMedi = list[parseInt(req.params.id)-1];
  var i=parseInt(req.params.id)-1;
  list[i].name = req.body.name;
  list[i].company = req.body.company;
  list[i].manufacturingDate = req.body.manufacturingDate;
  list[i].expiryDate = req.body.expiryDate;
  list[i].price = req.body.price;
  list[i].type = req.body.type;
  
  //list.push(medi);
  try{
  fs.writeFileSync(x,JSON.stringify(list),'utf8')
  }
  catch(err)
  {
	  console.log(err);
  }
 
			res.status(204).json({message:"Updated !"});
  
});

router.get('/delete/:id', function(req, res) {
	var i=parseInt(req.params.id);
	list.splice(i-1,1);
	//list.push(medi);
	 
  try{
  fs.writeFileSync(x,JSON.stringify(list),'utf8')
  }
  catch(err)
  {
	  console.log(err);
  }
    res.status(202).json({list:list})
  
});

module.exports = router;
