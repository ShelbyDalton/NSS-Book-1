// const wines = [ "red", "white", "white", "white", "red", "white", "red" ]
// const wineCellar = []
// const wineRefrigerator = []

// for (const wine of wines) {
// 	if (wine === "red") {
// 		wineCellar.push(wine)
// 	}
// 	else {
// 		wineRefrigerator.push(wine)
// 	}
// }

// console.log(`
// Contents of wine cellar: ${wineCellar}
// Contents of wine refrigerator: ${wineRefrigerator}
// `)



const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (const days of hours) {
    if (days <= 6){
        grumpyHours.push(days)
    }
    else if (days >= 5){ 
        happyHours.push(days)
    }
}

console.log(`I was grumpy on ${grumpyHours.length} days.
    I was happy on ${happyHours.length} days.`)



