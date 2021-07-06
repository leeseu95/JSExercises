/*Write a JavaScript function to convert an amount to coins. Go to the editor
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1*/

var amount = 46;
var arrayCoins = [25, 10, 2, 5, 1];

function amountToCoins(amountParam, arrayCoinsParam) {
    let coinArrayTracker = 0;
    let coinAccum = 0;
    let coinsGathered = [];
    let arrayCoinsSorted = arrayCoinsParam.sort((a, b) => a - b).reverse();
    // console.log(arrayCoinsParam.sort((a, b) => a - b).reverse());

    let coinNum = arrayCoinsSorted[coinArrayTracker];

    while(coinAccum != amountParam) {
        coinAccum += coinNum; //Add the coin to the current coins
        coinsGathered.push(coinNum); //push the coin added to coins gathered
        // console.log(coinAccum);
        while((coinAccum + coinNum) > amountParam) {
            console.log(coinsGathered);
            coinArrayTracker ++;
            coinNum = arrayCoinsSorted[coinArrayTracker];
        }
        if(coinAccum == amountParam){ 
            // console.log("aaaaa");
            break;
        }
    }
    console.log("Coins used: " + coinsGathered);
}

amountToCoins(amount, arrayCoins);