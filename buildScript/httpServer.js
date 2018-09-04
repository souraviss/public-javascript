//Rev Sourav Das
// var express=require('express');
import express from 'express';
// var path=require('path');
// var open=require('open');
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
//End of Rev Sourav Das
/* eslint-disabled no-console*/
//Rev Sourav Das
// var port=3000;
// var app=express();
const port=3000;
const app=express();
const compiler=webpack(config);
/* eslint-disable no-console */
//End of Rev Sourav Das
app.use(require('webpack-dev-middleware')(compiler,{
noInfo:true,
publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users',function(req,res){
//hard coding data Mocking
res.json([
   {"Id":1,"Name":"Tina","email":"tina@gmail.com"},
   {"Id":2,"Name":"Sourav","email":"sourav@gmail.com"},
   {"Id":3,"Name":"Amlan","email":"Amlan@gmail.com"},
]);
});

app.listen(port,function(err){
if(err)
{
console.log(err);
}
else
{
open('http://localhost:'+port);
}
});
