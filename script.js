let isOnline = true, IntervalID, timer = 10
const popup = document.querySelector('.popup')
const icon = document.querySelector('.icon i')
const popupTitle = document.querySelector('.popup .title')
const popupDesc = document.querySelector('.desc')
const reconnectBtn = document.querySelector('.reconnect')

const checkConnection = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/post");
        isOnline = response.status >= 200;
        console.log(response)
    } catch(error){
        isOnline = false
        
    }
    timer = 10
    clearInterval(IntervalID)
    handlePopup(isOnline)
}
const handlePopup = (status) => {
    console.log(status)
    if(status){
        // return popup.classList.remove('show')
        icon.className = 'uil uil-wifi'
        popupTitle.innerText = 'Connection Restored'
        popupDesc.innerText = "Your device is now connected to the Internet"
        popup.classList.add('online')
        return setTimeout(() => popup.classList.remove('show'), 2000)
    }
        icon.className = 'uil uil-wifi-slash'
        popupTitle.innerText = 'Lost Connection'
        popupDesc.innerHTML = "Your network is unavailable. We will attempt to reconnect in <b>10</b> seconds."
        popup.className = 'popup show'
        popup.classList.add('show')

    IntervalID = setInterval(() =>{
        timer--
        if(timer === 0) checkConnection()
        popup.querySelector('.desc b').innerText = timer
    }, 1000)
}
setInterval(() => isOnline && checkConnection(), 3000)
reconnectBtn.addEventListener('click', checkConnection)