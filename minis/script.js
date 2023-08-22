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



// function addArray(arr){
//     let sum = 0
//     arr.forEach(num => {
//         sum = sum+num
//     });
//     return sum
// }

// console.log(addArray([1, 1, 1, 1]))
// console.log(addArray([1, 2, 3, 4, 5]))



// Unique characters using set()

// function unique(str){

//     return new Set(str).size === str.length

//     // let tempStr = new Set()
//     // for(letter of str){
//     //     if(tempStr.has(letter)){
//     //         return false
//     //     }
//     //     tempStr.add(letter)
//     // }
//     // return true

// }


// console.log(unique('abcdefg'))
// console.log(unique('abcdeafg'))


// filter products by company 

// let products = [
//     {
//         title: 'Iphone 8',
//         company: 'Apple'
//     },
//     {
//         title: 'Galaxy',
//         company: 'Samsung'
//     },
//     {
//         title: 'Iphone 7',
//         company: 'Apple'
//     },
//     {
//         title: 'Iphone xS',
//         company: 'Apple'
//     },
//     {
//         title: 'HTC phone',
//         company: 'HTC'
//     }
// ]

// function getUnique(arr){
//     // let tempArr = arr.map(item => {
//     //     return item.company
//     // })
//     // return [... new Set(tempArr)]
//     return [...arr.reduce((acc,curr) => {
//         acc.add(curr.company)
//         return acc
//     }, new Set())]
// }

// console.log(getUnique(products))




// word with most repeated letters

// function repeatLetter(str){
//     let tempArr = str.split(' ')
//     tempArr = tempArr.map(item => {
//         let tempItem = item.toLowerCase().split('')
//         return tempItem.reduce((acc,curr) => {
//             acc[curr] = acc[curr] ? acc[curr] + 1 : 1
//             if(acc[curr]>acc.max){
//                 acc.max = acc[curr]
//             }
//             return acc

//         }, {max:1,word:item})

//     })
//     let amount = 1 
//     let word = ''
//     for (let item of tempArr){
//         if(item.max > amount){
//             amount = item.max
//             word = item.word
//         }
//     }
//     if(amount > 1){

//         return word
//     }
//     return -1




//     return tempArr
// }

// console.log(repeatLetter('welcome to the great state of mississippi'))
// console.log(repeatLetter('Javascript is the best programming language ever'))


// is a prime number?

// function isPrimeNum(num){
//     if (num < 2){
//         return false
//     }

//     return num
// }

// console.log(isPrimeNum(7))
// console.log(isPrimeNum(12))


// is string a palindrome wiht and without Regex

// function isPalindrome(str){
//     specialChar = ['!', '@', '#', "$", '%', '^', "*", '(', ')']
//     let noRegex = str.match(/[a-z0-9]+/ig)
    
//     let tempStr = str.split(' ').join('')
//     let backStr = tempStr.split('').reverse().join('')
//     console.log(tempStr)
//     console.log(backStr)
    
    // for (let i=tempStr.length-1; i>=0; i--){
    //     if(!specialChar.includes(tempStr[i])){

    //         backStr.push(tempStr[i])
    //     }
    // }

    // backStr = backStr.join('')

    // if (backStr === tempStr){
    //     return true
    // }
    // return false
// }


// console.log(isPalindrome('was it a car or a cat i saw'))





function chunkyArr(arr, len){
    const chunkedArr = []
    let i=0
    while(i<arr.length){
        chunkedArr.push(arr.slice(i, i+len))
        i += len
    }
    return chunkedArr
}

console.log(chunkyArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3))

