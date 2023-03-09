// // forEach : Accepts a callback function. Calls the function once per element in the array

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// nums.forEach(function (n) {     // use of anonymous function.
//     console.log( n * n )
// })

// nums.forEach(function (el) {    // use of anonymous function.
//     if (el % 2 == 0){
//         console.log(el)
//     }
// })

// // also we can write (but not preffered ): 

// // for (let el of numbers) {
// //     console.log(el)
// // }



// //MAP : Creates a new array with the results of calling a callback on every element in the array 

// const texts = ['ankur', 'art', 'programming', 'study']
// const caps = texts.map(function (t) {
//     return t.toUpperCase()
// })
// console.log(texts)
// console.log(caps)


// const movies = [ 
//     {
//         title: "bol na",
//         score: 99
//     },
//     {
//         title: "halke halke",
//         score: 88
//     },
//     {
//         title: "tere naam",
//         score: 98
//     }
// ]

// const titles = movies.map(function (t) {
//     return t.title.toUpperCase()
// })

// console.log(titles)




// //ARROW FUNCTIONS:
// // syntactically more complicated

// //lets code dice roll function using arrow function :
// const rolldie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(rolldie())


// //IMPLICIT RETURN USING ARROW FUNCTION: (only works when there only one line expression to return)
// const rollDie = () => (   //use of parenthesis instead of bracket.
//     Math.floor(Math.random() * 6) + 1
// )
// console.log(rollDie())

// //one-liner arrow function 
// const addNum = (a, b) => a + b
// console.log(addNum(2, 3)) 


//  ************   Now we can use ARROW FUNCTION in the above MAP & FOREACH   ***************  //


//setTimeout & setInterval : 

setTimeout(() => {
    console.log("hello viewer")
}, 3000)                           // two arguments are needed


const id = setInterval(() => {
    console.log(Math.random())
}, 2000)
// clearInterval(id)