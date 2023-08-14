// findLongest = (str) => {
//     longestWord =''
//     let words = str.split(' ')
//     words.forEach(word => {
//         if(word.length > longestWord.length){
//             longestWord = word
//         } 
//     })
//     return longestWord
// }

// console.log(findLongest('Hello my name is sam and sam I am'))
// console.log(findLongest("the alphabet is a series of letters used in combination to create words in the English langauge"))

// MATH SEQUENCES //

// mathSequence = (arr) => {
//     let arith = new Set()
//     let gio = new Set()

//     for (let i=1; i<arr.length; i++){
//         let number1 = arr[i] - arr[i-1]
//         arith.add(number1)
//         let number2 = arr[i] / arr[i-1]
//         gio.add(number2)

//     }

//     if(arith.size ===1){
//         return 'Arithmetic'
//     }
//     if(gio.size === 1 ){
//         return "Geometric"
//     }
//     return -1
    
//     console.log(arith)
//     console.log(gio)
//     // let pattern
//     // let keys = []
//     // arr.forEach(num => {
//     //     if (num%2 === 0){
//     //         keys.append(true)
//     //     } else{
//     //         keys.append(false)
//     //     }
//     // });
//     // if (keys){
//     //     pattern = 'Arithmetic'
//     // }
//     // return pattern
// } 


// console.log(mathSequence([2, 4, 6, 8]))
// console.log(mathSequence([2, 5, 14, 89]))
// console.log(mathSequence([3, 9, 27]))


//______ LONGEST WORD ______ //

// function longestWord(str){
//     let words = str.split(" ")
//     let size = 0
//     let max = [""]

//     for (let i=0; i<words.length; i++){
//         if (words[i].length >= size){
//             size = words[i].length
//             if (max[max.length-1].length < words[i].length){
//                 max=[]
//                 max.push(words[i])
//             } else {
//                 max = [...max, words[i]]
//             }
//         }
//     }

//     return [...max]
// }

// console.log(longestWord("Hello my great companion. It is a pleasurable experience to meet your aquantance"))


// ______CAPITALIZE FIRST LETTER OF EACH WORD ______

// function capitalize(str){
//     let words = str.split(" ").map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     console.log(words.join(' '))
   
   
// }

// console.log(capitalize('hello you filthy animal'))




// function isUnique(str){
//     // turn str into an array
//     let check1 = str.split('')
//     // duplicate array
//     let check2 = [...check1]
//     // loop through one array 
//     for(let i=0; i<check1.length; i++){
//         if(check2.includes(check1[i], i+1)){
//             return 'this is not a unique set'
//         }else{
//             return 'this is a unique set'
//         }
//     }

// }


// // isUnique('abcde')


// console.log(isUnique('everywhere I go, bitches always know'))
// console.log(isUnique('the quick brwn fox jumpd  lazy dog'))


// ______ Array SUM



function addArray(arr){
    let sum = 0
    arr.forEach(num => {
        sum = sum+num
    });
    return sum
}

console.log(addArray([1, 1, 1, 1]))
console.log(addArray([1, 2, 3, 4, 5]))