const functions = require('firebase-functions');
const express =require('express');
const app=express();
// set the view engine to ejs
app.set('view engine', 'ejs');
var people = ['geddy', 'neil', 'alex'];
app.get('/',(request,response)=>{
    //response.send(`${Date.now()}`);
    response.set('Cache-Control','public, max-age=300, s-maxage=600');
    response.render('index',{peoples:people});
});

exports.app = functions.https.onRequest(app);
