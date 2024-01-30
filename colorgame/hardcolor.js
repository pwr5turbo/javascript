function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function showColor(){
    var colors = ["red", "green", "blue", "yellow", "aqua", "purple", "orange", "lightgreen", "brown"];


    var shuffledColors = shuffleArray(colors);

    for (var i = 1; i <= 9; i++) {
        var colorId = "color" + i;
        document.getElementById(colorId).style.backgroundColor = shuffledColors[i - 1];
    }

    var basiskleurIndex = Math.floor(Math.random() * colors.length);
    document.getElementById("basiskleur").style.backgroundColor = shuffledColors[basiskleurIndex];
}