// daily notes
// Shelby Dalton
// 02-15-2023
// NSS Book-1

/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [ 
    {
        id: 1,
        text: "Do not forget that brackets make it an array",
        author: "Myself",
        date: "02-15-2023",
        topics: ["notes", "coding", "remembering"]
}
]

console.log(notes)

notes.push({
    id: 2, 
    text: "Do not forget the curly brackets for each data set inside the array",
    author: "Shelby",
    date: "February, 15th 2023",
    topics: ["more notes", "more coding", "fun", "more remembering"]
})

notes.push({
    id: 3, 
    text: "Do not forget to add the ',' to the end of each line of the array",
    author: "Shelby 15 seoncds later",
    date: "15th day of 2nd month of the 2,023rd year AD",
    topics: ["extra notes", "extra coding", "extra remembering"]
})

const notesTwo = {
    id: 4, 
    text: "This data set is to experiment without parentheses",
    author: "Shelby several minutes later",
    date: "02/15/2023",
    topics: ["quadruple notes", "quadruple coding", "quadruple remembering", "fun"]
}

notes.push(notesTwo) // This works as long as I do not use parentheses around 
// the curly brackets. 

console.log(notes)

// Making a new array and titling with a new "notes" title such as "notesTwo" and 
// then running it with "notes.push(notesTwo)" 
// seems to output "[array]" instead of the array itself. *edit: solution found. 


for (const note of notes){
   console.log(note.text) 
}

console.log("*** All Note Topics ***") // Leave this outside of the for..of loop, or it will repeat.

for (const note of notes){
    console.log(`${note.topics}`)
}

console.log("*** Average Topics Per Note ***")
// Need to count up all the topics, so start at 0
let totalTopics = 0
let noteTopics = []
// Iterate all of the notes
for (const note of notes) {
       // Increase the value of `totalTopics` by the number of topics on this note
    totalTopics += note.topics.length
    noteTopics.push(note.topics)
}
const averageTopics = totalTopics / noteTopics.length
// Calculate the overall average
console.log(averageTopics)


console.log("*** Notes with the fun topic ***")

let filteredNotes = []
let criteria = "fun"

for (const note of notes) {
    if (note.topics.includes("fun")) // The "includes" must be the exact criteria. This will not pull a data 
    filteredNotes.push(note) // with a single word from a subset of a data set. "fun" works if the subset 
}                               // includes the exact array of "fun". Will not work if you try to pull a data
                                // set whose array includes "school is fun" by only using "fun". Must use 
console.log(filteredNotes);     // "school is fun" for this function to work. 


console.log("***  Note Articles  ***")   // LESS IS MORE, DON'T OVER COMPLICATE IT 


/*
    Since the string has to be built up in parts - in both
    the outer loop and the inner loop - start off with a
    variable that has an initial value of an empty string.
*/
let allHTML = ""

/*
    Iterate all notes
*/

/*
    Inside the iteration of all notes, add the open article
    tag and the note text.
*/


/*
    Then iterate the `topics` array for the current note.
*/

for (note of notes) {
        allHTML += `\n<article>\n\t${note.text}`
    for (topic of note.topics) {
        let section = `\n\t<section>${topic}</section>`
        allHTML += section
    } 
    allHTML += `\n</article>`
}



console.log(allHTML)

/*
    Create a string template with an opening and closing
    <section> element with the topic text interpolated
    between them. Then add the string template to the
    variable created at the start with the += operator.
*/



/*
    After both for..of loops are done, add the closing
    </article> tag to the end of the main string with +=
*/
