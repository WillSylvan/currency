let exchangeRates = {
    eur: 1,
    lvl: 1.47,
    usd: 1.11
}



let usdToLvl = usd => {
    // 1. usd => eur
    let eur = usd / exchangeRates.usd  
    //  2.eur => lvl 
     let lvl = eur * exchangeRates.lvl

     return lvl
}


let lvlToUsd = lvl => {
    // 1. lvl => usd
    let eur = lvl * exchangeRates.lvl
    // 2. usd => eur
    let usd = eur / exchangeRates.usd

    return usd
}


let lvl = usdToLvl(10) 
let usd = lvlToUsd(1)


