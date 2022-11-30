const button = document.getElementById('button');
const background = document.getElementById('background')
const text = document.getElementById('text')

const randomColor = () => {

  //link color (https://htmlcolorcodes.com/color-names/)

  const colors = ['indianRed', 'lightcoral', 'salmon', 'darksalmon', 'lightsalmon', 'crimson', 'red', 'firebrick', 'darkred', 'pink', 'lightpink', 'hotpink', 'deeppink', 'mediumvioletred', 'palevioletred', 'lightdalmon', 'Coral', 'tomato', 'orangered', 'darkorange', 'orange', 'gold', 'yellow', 'lightyellow', 'lemonchiffon', 'papyawhip', 'moccasin', 'peachpuff', 'palegoldenrod', 'khaki', 'darkkhaki', 'lavender', 'thistle', 'Plum', 'violet', 'orchild', 'fuchsia', 'magenta', 'mediumorchid', 'mediumpurple', 'rebeccapurple', 'blueviolet', 'darkviolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue']

  const random = Math.floor(Math.random() * colors.length)

  let chosenColor = colors[random]

  background.style.backgroundColor = chosenColor

  text.innerHTML = chosenColor
};

randomColor()

button.addEventListener('click', randomColor);