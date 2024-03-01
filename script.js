
let start = document.querySelector("#start").addEventListener('click', function () {
  darkMode()
})

let stop = document.querySelector("#stop").addEventListener('click', function () {
  lightMode()
})

function darkMode() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'White';
}

function lightMode() {
  document.body.style.backgroundColor = '#FFF';
  document.body.style.color = 'black';
}