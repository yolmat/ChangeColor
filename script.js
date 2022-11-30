const button = document.getElementById("button");
const background = document.getElementById('background')
const text = document.getElementById('text')

const randomColor = () => {

  const colors = Math.floor(Math.random() * 16777215).toString(16);

  const colorChange = '#' + colors

  background.style.backgroundColor = colorChange

  text.innerHTML = colorChange
};

randomColor()

button.addEventListener("click", randomColor);