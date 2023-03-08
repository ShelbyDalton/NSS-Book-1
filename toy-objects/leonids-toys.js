const toys = [
    {
    id: 1,
    name: "Rubik's Cube",
    maker: "Toy Company",
    price: 10,
    weight: 0.45
},
{
    id: 2,
    name: "Lego Death Star",
    maker: "Lego",
    price: 300,
    weight: 20.45
},
{
    id: 3,
    name: "Hot Wheels",
    maker: "Mattel, Inc.",
    price: 25,
    weight: 4.98
},
]

const toysTwo =
    {
        id: 4,
        name: "Candy Land",
        maker: "Board Games, Inc.",
        price: 19,
        weight: 2.56
    }
const toysThree = 
        {
        id: 5,
        name: "Samurai Sword",
        maker: "Bandai",
        price: 175,
        weight: 23.21
    }

console.log(toys)




for (const toy of toys) {
    console.log(`Price is $${toy.price}`)
}

for (const toy of toys) {
    console.log(`Toy is ${toy.name}`)
}

toys.push(toysTwo) // For some reason this works here, but I found it gave an output 
toys.push(toysThree) // of "[array]" in my daily-notes code. Maybe due to there being
// no parentheses in this version. 

console.log(toys)

for (const toy of toys) {
    toy.price = toy.price * 1.05
}

for (const toy of toys) {
    console.log(`The ${toy.name} costs $${toy.price} and is made by ${toy.maker}`)
}

const toyToFind = 2

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * 1.05
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. This toy weighs ${toy.weight} in pounds.`)
    }
}