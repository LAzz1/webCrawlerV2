function marketValidation(siteData,sitesNames) {
    var marketPlatform
    sitesNames.forEach((data)=>{
        if(siteData.includes(data)){
            marketPlatform = data
        }
    })

    return marketPlatform
}

module.exports = { marketValidation }