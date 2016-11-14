let exchangeRates = {
    eur: 1,
    lvl: 1.47,
    usd: 1.11,
    gbp: 1.12,
    jpy: 0.0086,
    cad: 0.678,
    0.025
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

function convert (money, from, to ) {

    //1. eur => lvl
        let lvl = eur * exchangeRates.lvl
    //2. eur => usd
    

         


}



let lvl = usdToLvl(10) 
let usd = lvlToUsd(1)


