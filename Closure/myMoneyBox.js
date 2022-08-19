// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(15);


function moneyBox(){
    let saveCoins = 0;
    
    return function countCoins(coins){
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`)
    }
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(55);

const moneyBoxDaniel = moneyBox();

moneyBoxDaniel(100);
moneyBoxDaniel(100);
