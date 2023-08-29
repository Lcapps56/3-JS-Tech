const words = ["dog", "Nashville", "Javascript", "Coffee", "apple"]
const wordText = document.querySelector('.guessedWord')
const chancesText = document.querySelector('.main').children[2].querySelector('span')
const incorrectText = document.querySelector('.main').children[1].querySelector('span')
let chances = 3
chancesText.innerText = chances

const correctLetters = []
const incorrectLetters = []

// guess word
let word = words[Math.floor(Math.random() * words.length)].toLowerCase()
// load underscores 
let displayWord = Array.from(word).map(() => "_")
let updateText = () => {
    wordText.textContent = displayWord.join(' ')
}
updateText()

// CHECK IF THE GUESS IS A LETTER
// window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', (e) => {
        let guessedLetter = e.key.toLowerCase()
        // if the guess was not a letter
        if(!guessedLetter.match(/^[a-z]/) || guessedLetter.length > 1){
            console.log('this is not a letter')
            // if the guess was correct
        } else if(word.includes(guessedLetter)) {
            console.log('that was a correct guess')
            // main game code
            for(let i=0;i<word.length;i++){
                if(word[i] === guessedLetter){
                    displayWord[i] = guessedLetter
                }
            }
            updateText()
            if(!displayWord.includes('_')){
                endGame(true)
            }
            // if the guess was incorrect
        } else{
            chances -= 1
            chancesText.innerText = chances
            if(chances === 0){
                endGame(false)
            }
            updateLetters(guessedLetter)
            console.log(guessedLetter)
        }
    })
// })

let updateLetters = (char) => {
    incorrectLetters.push(char)
    incorrectText.innerText = incorrectLetters.join(', ')
}
let endGame = (arg) => {
    if(arg === true){
        document.querySelector('.gameWon').style.display = 'block'
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.gameWon button').addEventListener('click', ()=> {
            location.reload()
        })
    } else{
        document.querySelector('.gameWon').style.display = 'block'
        document.querySelector('.wonText').style.display = 'none'
        document.querySelector('.lostText').style.display = 'block'
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.gameWon button').addEventListener('click', ()=> {
            location.reload()
        })
    }
    
}