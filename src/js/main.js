import './../sass/style.sass'

const buttons = document.querySelectorAll('.switch');
const darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkmode) {
  document.body.dataset.theme = "dark";
} else {
  document.body.dataset.theme = "";
}

buttons.forEach(button => {
  button.addEventListener('click', setTheme);
})

function setTheme($event) {
  document.body.dataset.theme = $event.target.dataset.theme;
}