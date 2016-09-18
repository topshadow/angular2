var fs = require('fs');
var uuid = require('uuid');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
