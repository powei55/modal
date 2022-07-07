const overlayEl = document.querySelector('#overlay-el')
const closeInfo = document.querySelector('#close-info')
const openInfo = document.querySelector('#open-info')

openInfo.addEventListener('click', function() {
    overlayEl.style.display = "block"
})
closeInfo.addEventListener('click', function() {
    overlayEl.style.display = "none"
})



