var express=require('express');
var bodyParser = require('body-parser');
var app=express();
var userRoute=require("./routes/user.route");
// var low = require('lowdb');
// var shortid = require('shortid');
// var db=require("./db");
// var FileSync = require('lowdb/adapters/FileSync');
// var adapter = new FileSync('db.json');
// db = low(adapter);
// Set some defaults (required if your JSON file is empty)
// db.defaults({ users: [] })
//   .write()
var port=3000;

app.set("view engine","pug");
app.set("views","./views");
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

// var users=[
//     {id: 1, name: 'Cường'},
//     {id: 2, name: 'Bườm'},
//     {id: 3, name: 'Bảo'},
//     {id: 4, name: 'Khương'}
// ];

app.get('/',function(req,res){
    // res.send("<h1>Hello Coders.Tokyo</h1><a href='/users'>User List</a>");
    res.render("index",{
        name: "AAAA"
    });    
});
// app.get('/users',function(req,res){
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
// app.get('/users/search',function(req,res){
//     var q=req.query.q;
//     var matchedUsers=users.filter(function(user){  
//         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
//     });
//     // console.log(req.query);
//     res.render("users/index",{
//         users: matchedUsers
//     });
// });
// app.get('/users/create',function(req,res){
//     res.render('users/create');
// });
// app.get('/users/:id',function(req,res){
//     // var userId=parseInt(req.params.id);
//     var userId=req.params.id;
//     // console.log(typeof id);
//     var user=db.get('users').find({id: userId}).value();
//     // console.log(user);
//     res.render("users/view",{
//         user: user
//     });
// });
// app.post('/users/create',function(req,res){
//     // res.render('users/create');
//     // console.log(req.body);
//     // users.push(req.body);
//     req.body.id=shortid.generate();
//     db.get('users').push(req.body).write();
//     res.redirect("/users");
// });
app.use("/users",userRoute);
app.listen(port, function(){
    console.log("Đã truy cập vào Server cổng "+port);
});