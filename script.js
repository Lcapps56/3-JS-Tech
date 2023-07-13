let isOnline = true
const popup = document.querySelector('.popup')

const checkConnection = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/post");
        isOnlne = response.status >= 200;
        console.log(response)
    } catch(error){
        isOnline = false
    }
    handlePopup(isOnline)
}
const handlePopup = (status) => {
    if(status){
        return popup.classList.remove('show')
    }
    popup.classList.add('show')
}
setInterval(checkConnection, 3000)