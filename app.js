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
}

let lvl = usdToLvl(10) 


