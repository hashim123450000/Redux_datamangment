let myExpress = require('express');
const axios = require('axios').defaul
 
 let signupdata=[]

let myApp = myExpress();
 myApp.post("/signup",(req,res) =>{
signupdata.push(req.body)
 console.log(req.body)

 } )


myApp.listen(5479, ()=>{

    console.log('server chaling');

})