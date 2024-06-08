function changeColor() {
    var mainElement = document.querySelector('main');
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    mainElement.style.backgroundColor = randomColor;
}
