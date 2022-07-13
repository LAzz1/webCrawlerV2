const fs = require('fs')
const readline = require('readline');
const axios = require('axios');
const { error } = require('console');
var marketValidation = require('./marketValidation')
var createCsv = require('./createCsv')

async function processLineByLine(fileToRead, sitesNames) {
    var fileStream = fs.createReadStream(fileToRead);
    var rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    // código para fazer request individual de cada site
    for await (const line of rl) {

        // utilizando o metodo get do axios para pegar as informações de cada site
        // timeout de 10 segundos, caso demore mais de 10 segundos para abrir um site ele pula pro proximos

        axios.get(`https://${line}/`, { timeout: 5000 }).then(res => {
            var siteData = res.data
            var ecommercePlatform = marketValidation.marketValidation(siteData, sitesNames)
            createCsv.writeFile(line, ecommercePlatform)

            /*console.log(line)
            console.log(`statusCode: ${res.status}`)
            // chamando a função pra ver se a plataforma tem o market place da lista
            console.log(ecommercePlatform)
            console.log('\n') */

        }).catch(error => {
            return error
        })

    }
}

module.exports = { processLineByLine }