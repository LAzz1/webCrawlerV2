const createCsv = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsv({
    path: 'sitesPlan.csv',
    header: [
        { id: 'url', title: 'SITE' },
        { id: 'marketplace', title: 'PLATAFORMA' },
        { id: 'ebit', title: 'E-BIT' },
        { id: 'reclameAqui', title: 'RECLAME AQUI' }
    ]
})

function writeFile(line, ecommercePlatform, isEbit, isReclameAqui) {
    csvWriter.writeRecords([{ 
        url: line, 
        marketplace: ecommercePlatform,
        ebit: isEbit,
        reclameAqui: isReclameAqui
    }])
}
module.exports = { writeFile }