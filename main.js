const fs = require('fs')
var readFiles = require('./aplications/readSiteList')


const dir = './site_test'
const files = fs.readdirSync(dir)
const sitesNames = []

files.forEach(data =>{
        // colocando o nome dos arquivos, que nesse caso vão ser as plataformas de ecommerces dentro de um array
        var nameToPush = data.split('.')
        sitesNames.push(nameToPush[0])
})
// removendo o primeiro elemento do array porque avanti não é uma plataforma e sim uma agencia
sitesNames.shift()

// forEach para passar de arquivo por arquivo dentro da pasta site_list
files.forEach((data) => {
    //dentro de cada arquivo vamos chamar a função para ler linha por linha
    readFiles.processLineByLine(`./site_test/${data}`,sitesNames)
})
