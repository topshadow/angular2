
var    mongoose = require('mongoose');
var db= function(){
    var db = mongoose.connect('mongodb://123:123@ds023664.mlab.com:23664/topshadow',function(err){
        if(err){
            console.log(err);
        }else{
            console.log('connection to mongodb successfully');
        }

    });
    
    return db;
};
module.exports = db;