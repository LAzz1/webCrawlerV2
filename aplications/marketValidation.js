function whichPlatform(siteData, sitesNames) {
    var marketPlatform
    sitesNames.forEach((data) => {
        if (siteData.includes(data)) {
            marketPlatform = data
        }
    })

    return marketPlatform
}

function isEbit(siteData) {
    if (siteData.includes('seloEbit')) {
        return "Sim"
    }
    return 'Não'
}

function isReclameAqui(siteData) {
    if (siteData.includes('Selo Reclame Aqui')) {
        return "Sim"
    }
    return 'Não'
}

module.exports = { whichPlatform, isEbit, isReclameAqui }