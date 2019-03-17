// Usage:
// npm install http
// node app.js
var http = require('http');

var express=require('express');
var bodyParser = require("body-parser");
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log('lets start');
var fs = require('fs');


app.get('/api/products', function (req, res) {
  fs.readFile('./products.json', 'utf8', function (err, data) {
      if (err) throw err; // we'll not consider error handling for now

      var obj = JSON.parse(data);

     if(req.query.sort==''){
       var sort='id';}
       else{
         sort=req.query.sort;}
         if(req.query.order===''){
      var order='asc';}
      else{order=req.query.order;}
      console.log(req.query.spec.length);
      if(req.query.spec.length<1){
              console.log('spec not specified');
              findproduct(sort,order,obj);
      }
      else {
            var spec=req.query.spec;
            var  arr=[];
            var ss=new Set();
            for (var key in obj) {
               arr.push((obj[key].specifications));
              }

            var flag=0;
            for (var key in obj) {

                 for(var value of spec){

                     if(arr[key].indexOf(value) > -1){
                            flag=1;
                       }
                    else  {
                          flag=0;
                          break;
                         }
                   }
                 if(flag == 1){
                               ss.add(Number(key));
                             }

                 var array =Array.from(ss);
             }

          var obj3=[];
          for(var i of array){
          obj3.push(obj[i]);
        }
        console.log(obj3);
        findproduct(sort,order,obj3);
     }
});


   app.post('/api/products',urlencodedParser, function (req, res) {
     fs.readFile('./products.json', 'utf8', function (err, data) {
         if (err) throw err; // we'll not consider error handling for now

         var obj = JSON.parse(data);

        if(req.body.sort===null){
          var sort=id;}
          else{
            sort=req.body.sort;}
            if(req.query.order===null){
         var order=asc;}
         else{order=req.body.order;}
         if(req.body.spec===null){

                 findproduct(sort,order,obj);

         }
         else {
               var spec=req.body.spec;
               var  arr=[];
               var ss=new Set();
               for (var key in obj) {
                  arr.push((obj[key].specifications));
                 }

               var flag=0;
               for (var key in obj) {

                    for(var value of spec){

                        if(arr[key].indexOf(value) > -1){
                               flag=1;
                          }
                       else  {
                             flag=0;
                             break;
                            }
                      }
                    if(flag == 1){
                                  ss.add(Number(key));
                                }

                    var array =Array.from(ss);
                }

             var obj3=[];
             for(var i of array){
             obj3.push(obj[i]);
           }

           findproduct(sort,order,obj3);
        }
});
});

  function  findproduct(sort,order,obj){

           obj2 = sortJSON(obj,sort,order); // 123 or 321
           function sortJSON(data, key, way) {
    return data.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        if (way === 'asc' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
        if (way === 'dsc') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
       }
           var arr=[]
           arr=obj2;
           console.log(arr);
           var sen=JSON.stringify(arr);
           res.send(sen);
    }
});
app.listen(3000);
