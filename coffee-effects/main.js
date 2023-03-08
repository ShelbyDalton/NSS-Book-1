// const pineappleBelongsOnPizza = true
// const theyWereOnABreak = true
// const theOfficeIsFunny = false

// if (pineappleBelongsOnPizza && theyWereOnABreak) {
// 	// Both variables are true, so this code runs
// 	console.log("Basic")
// }

// if (pineappleBelongsOnPizza && theOfficeIsFunny) {
// 	// Since both of the variables' values are not true, this won't run
// 	console.log("Bad")
// }

// const pineappleBelongsOnPizza = true
// const theyWereOnABreak = true
// const theOfficeIsFunny = false

// if (pineappleBelongsOnPizza || theOfficeIsFunny) {
// 	// One of the variables' value is true, so this runs
// 	console.log("Basic")
// }

// if (theyWereOnABreak || theOfficeIsFunny) {
// 	// One of the variables' value is true, so this runs
// 	console.log("Bad")
// }

// const allFeedback = [
//     "I don't regret coming, but I won't recommend it to a friend.",
// 	"I would say I was disappointed in the production.",
// 	"I was happy. The whole play had me smiling.",
// 	"What a delightful evening. Money well spent.",
// 	"Meh. It was fine.",
// 	"While there was nothing terrible, I was disappointed in the music.",
// 	"I was delighted by the fun music and the whimsical dances.",
// 	"I didn't hate it, but the last 20 minutes had me completely bored."
// ]

// let happyCustomers = 0
// let unhappyCustomers = 0

// for (const feedback of allFeedback) {
// 	/*
// 		If the current feedback includes the string of "delight" or the string
// 		of "happy", increase the value of the happyCustomers variable by 1
// 	*/
// 	if (feedback.includes("delight") || feedback.includes("happy")) {
// 		happyCustomers++
// 	}
// 	/*
// 		If the current feedback includes the string of "disappointed" or
// 		the string of "bored", increase the value of the unhappyCustomers
// 		variable by 1
// 	*/
// 	else if (feedback.includes("disappointed") || feedback.includes("bored")) {
// 		unhappyCustomers++
// 	}
// }

// console.log(`Happy customers: ${happyCustomers}
// Unhappy customers: ${unhappyCustomers}
// `)


const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)