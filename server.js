var fs = require('fs');
var uuid = require('uuid');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var  db = require('./mongoose')();
var User = require('./user.model').User;

var app = express();



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());



app.all('/upload',(req,res,next)=>{
        var base64Data = req.body.data;
        base64Data = base64Data.replace('data:image/png;base64,','');
        console.log(base64Data);
        var dataBuffer = new Buffer(base64Data, 'base64');
        var filename =uuid.v1()+'.png';
        var fullpath =path.join(__dirname,'upload/'+filename);
        fs.writeFile(fullpath, dataBuffer, function (err) {
                // ftpserver.putFile(filename,fullpath);
            res.json({
              state:1,
              issuccess:true,
              url:'upload/'+filename
            });
            next();
        });

});


app.all('/sign-up',(req,res,next)=>{
      var {username,password} = req.query;
      if(username&&password){
           new User({username:username,password:password}).save();
           res.json({
             issuccess:true,
             msg:'注册成功'
           })
      }else{
        res.json({
          issuccess:false,
          msg:'缺失用户名或密码'
        })
      }
});

app.all('/sign-in',(req,res,next)=>{
  var {username,password} = req.query;
  if(username&&password){
       User.find({password:password,username:username}).exec((err,doc)=>{
         if(err){throw err};
         if(doc.length>0){ res.json({issuccess:true,user:JSON.stringify(doc[0])})}else{
           res.json({
             issuccess:false,msg:'该用户不存在'
           })
         }
       });
  }
});

app.all('/update-user',(req,res,next)=>{
  var {username,websiteData} = req.body;
  if(username&&websiteData){
    if(typeof websiteData =='string'){
      websiteData = JSON.parse(websiteData);
    }
    console.log(username,websiteData);   
    User.find({username:username}).update({websiteData:websiteData}).exec((err,doc)=>{
      if(err) throw err;
      res.json({issuccess:true});
    })
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
