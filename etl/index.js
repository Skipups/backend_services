// const fs = require('fs')
// const csv = require('csvtojson')

// //where we are extrating from

// const csvFilePath= '../database/raw/healthcare.csv'
// const jsonFilePath= '../database/processed/healthcare.json'

// csv()
// .fromFile(csvFilePath)
// .then(writeJSON);

// function writeJSON(jsonObj){
//   fs.writeFile(jsonFilePath, JSON.stringify(jsonObj))

// }
const fs = require('fs');
const csv = require('csvtojson');

const csvPath = '../database/raw/healthcare.csv';
const jsonFilePath = '../database/processed/healthcare.json'
console.log('csvPath', csvPath)
csv()
  .fromFile(csvPath)
  .then(writeJSON);

function writeJSON(jsonObj) {
    fs.writeFile(jsonFilePath, JSON.stringify(jsonObj), function (err){
      if(err) return err
    });
}