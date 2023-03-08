const clay = ["Clay", "Clay", "Clay", "Clay"]
const toFireInKiln = []

for (const dirt of clay) {
    const mug = `${dirt} coffee mug`
    toFireInKiln.push(mug)
}

console.log(toFireInKiln)


const originals = [ "Original paper 1", "Original paper 2", "Original paper 3" ]
const copies = []  // Blank array that will contain the copies

for (const paper of originals) {
	const copy = `Copy of ${paper}`
	copies.push(copy)
}

console.log(copies)

const dog = ["Bark", "Bark", "Bark", "Bark"]
const whatTheDogSays = []

for (const noise of dog){
    const dogSound = `I say ${noise}`
    whatTheDogSays.push(dogSound)
}

console.log(whatTheDogSays)