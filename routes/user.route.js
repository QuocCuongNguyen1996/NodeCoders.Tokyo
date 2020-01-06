var express = require('express');
var controller =require("../controllers/user.controller");
var validate=require("../validate/user.validate");
var router = express.Router();
// var shortid = require('shortid');
// var db=require("../db");

// router.get('/',function(req,res){
//     // res.send("User list");
//     res.render("users/index",{
//     //    users: [
//     //         {id: 1, name: "Cuong"},
//     //         {id: 2, name: "Buom"}
//     //     ]
//         // users: users
//         users:db.get('users').value()
//     });
// });
router.get('/',
    controller.index
);
// router.get('/search',function(req,res){
//     var q=req.query.q;
//     var matchedUsers=users.filter(function(user){  
//         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//     });
//     // console.log(req.query);
//     res.render("users/index",{
//         users: matchedUsers
//     });
// });
router.get('/search',
    controller.search
);
// router.get('/create',function(req,res){
//     res.render('users/create');
// });
router.get('/create',
    controller.create
);
// router.get('/:id',function(req,res){
//     // var userId=parseInt(req.params.id);
//     var userId=req.params.id;
//     // console.log(typeof id);
//     var user=db.get('users').find({id: userId}).value();
//     // console.log(user);
//     res.render("users/view",{
//         user: user
//     });
// });
router.get('/:id',
    controller.get
);
// router.post('/create',function(req,res){
//     // res.render('users/create');
//     // console.log(req.body);
//     // users.push(req.body);
//     req.body.id=shortid.generate();
//     db.get('users').push(req.body).write();
//     res.redirect("/users");
// });
router.post('/create',validate.postCreate,
    controller.postCreate
);

module.exports=router;