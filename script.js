const button = document.getElementById("button");
const background = document.getElementById('background')
const text = document.getElementById('text')

const randomColor = () => {
  const colors = ["red", "blue", "green", "black"];

  const number = Math.floor(Math.random() * colors.length);

  let chosenColor = colors[number]

  if (chosenColor == "red") {
    background.style.backgroundColor = 'red'
    text.innerHTML = 'Red'
  } else if (chosenColor == "blue") {
    background.style.backgroundColor = 'blue'
    text.innerHTML = 'Blue'
  } else if (chosenColor == "green") {
    background.style.backgroundColor = 'green'
    text.innerHTML = 'Green'
  } else if (chosenColor == "black") {
    background.style.backgroundColor = 'black'
    text.innerHTML = 'Black'
  }
};

button.addEventListener("click", randomColor);