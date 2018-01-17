const trigger = document.querySelector('.c-searchbar__trigger')
const close = document.querySelector('.c-searchbar__close')
const searchbar = document.querySelector('.c-searchbar')

trigger.addEventListener('click', () => {
  searchbar.classList.add('is-open')
  trigger.classList.add('is-open')
  document.getElementById('searchfield').focus()
})

close.addEventListener('click', () => {
  searchbar.classList.remove('is-open')
  trigger.classList.remove('is-open')
})

// Remove State on Keypress ESC
document.onkeydown = () => {
  if (event.keyCode === 27) {
    searchbar.classList.remove('is-open')
    trigger.classList.remove('is-open')
  }
}
