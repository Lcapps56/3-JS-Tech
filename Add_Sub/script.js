let value = 0
let DOMval = document.querySelector('.value')

add = () => {
    value ++
    value = (value<10) ? "0" + value : value
    DOMval.innerText = value
}
subtract = () => {
    if (value > 1){
        value --
        value = (value<10) ? "0" + value : value
        DOMval.innerText = value
    }
}