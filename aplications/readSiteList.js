const fs = require('fs')
const readline = require('readline');
const axios = require('axios');
const { error } = require('console');
var marketValidation = require('./marketValidation')
var createCsv = require('./writeCsv');
const { resolve } = require('path');

function wait(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

    async function processLineByLine(fileToRead, sitesNames) {
        var fileStream = fs.createReadStream(fileToRead);
        var rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        // código para fazer request individual de cada site
        for await (const line of rl) {
    
            // utilizando o metodo get do axios para pegar as informações de cada site
            axios.get(`https://${line}/`).then(res => {
    
              var siteData = res.data
              var ecommercePlatform = marketValidation.whichPlatform(siteData, sitesNames)
              var isEbit = marketValidation.isEbit(siteData)
              var isReclameAqui = marketValidation.isReclameAqui(siteData)
              createCsv.writeFile(line, ecommercePlatform, isEbit, isReclameAqui)
  
  
          }).catch(error => {
              if (error.response) {
                return;
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                return;
                // The request was made but no response was received
                console.log(error.request);
              } else {
                return;
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
          
            })
        }
    }
    module.exports = { processLineByLine }

