var db=require("../db");
var shortid = require('shortid');
module.exports.index=function(req,res){
    // res.send("User list");
    res.render("users/index",{
        //    users: [
        //         {id: 1, name: "Cuong"},
        //         {id: 2, name: "Buom"}
        //     ]
            // users: users
            users:db.get('users').value()
        });
};
module.exports.search=function(req,res){
    var q=req.query.q;
    // var matchedUsers=users.filter(function(user){ 
    var matchedUsers=db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    // console.log(req.query);
    res.render("users/index",{
        users: matchedUsers
    });
};
module.exports.create=function(req,res){
    res.render('users/create');
};
module.exports.get=function(req,res){
      // var userId=parseInt(req.params.id);
      var userId=req.params.id;
      // console.log(typeof id);
      var user=db.get('users').find({id: userId}).value();
      // console.log(user);
      res.render("users/view",{
          user: user
      });
};
module.exports.postCreate=function(req,res){
   // res.render('users/create');
    // console.log(req.body);
    // users.push(req.body);
    req.body.id=shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect("/users");
};