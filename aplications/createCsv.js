const createCsv = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsv({
    path: 'sitesPlan.csv',
    header: [
        { id: 'url', title: 'SITE' },
        { id: 'marketplace', title: 'PLATAFORMA' }
    ]
})

function writeFile(line, ecommercePlatform) {
    csvWriter.writeRecords([{ url: line, marketplace: ecommercePlatform }])
}
module.exports = { writeFile }