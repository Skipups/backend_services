const fs= require('fs')
const express= require('express')


//minimalistic HTTP server framework. Creating an instance of express app. This app object allows me to register routes on it 
// that mimic HTTP methods. They 2 arguments- the route and route handler function. route handler function is a cb function taking 2 arguments
// request and response
const app= express()  

app.get('/api/reports/:report_id', function (request, response){
  const reportID= request.params.report_id
  //get File
  //send File


  //__dirname for the current directory name, 
  //process for information about the Node process running on the computer and it’s environment
const path= `${__dirname}/../database/processed/${reportID}.json`;
console.log('path', path)
const report = JSON.parse(fs.readFileSync(path, 'utf-8'))
  response.json(report)
})

module.exports= app