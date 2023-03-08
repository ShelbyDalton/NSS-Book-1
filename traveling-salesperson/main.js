const milesTraveledPerWeek = [150, 208, 321, 895, 650, 447]
const weeklyMiles = [  ]

let totalMiles = 0 

for (const miles of milesTraveledPerWeek) {
	totalMiles += miles
}

const averageMiles = totalMiles / milesTraveledPerWeek.length

// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.
	I have driven a total of ${totalMiles} miles.`)