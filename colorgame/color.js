var gameStarted = false;
var loopstr = 'loop';
var timeoutId;
var loop = 0;
var goed = 0;
var fout = 0;
var colorClicked = true;
var colors_Aantal = 0;
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

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
    var colors_Aantal = document.getElementById("kleuraantal").value;
    var color_div = "color_div";
    document.getElementById(color_div).innerHTML = "";
    
    for (var i = 1; i <= colors_Aantal; i++){
        var colorId = "color" + i;
        document.getElementById(color_div).innerHTML += '<div class="color" id="'+ colorId +'" onclick="check('+i+' )" >'+i+'</div>'
    }

    document.getElementById(color_div).innerHTML +='<div id="basiskleur">Basiskleur</div>';
    document.getElementById(color_div).innerHTML +=' <button id="start" class="btn" onclick="start('+ loopstr + ')">Start</button>';
    document.getElementById(color_div).innerHTML +=' <button id="stop" class="btn" onclick="stop()">Stop</button>';
    document.getElementById(color_div).innerHTML +='<button id="showColors" class="btn" onclick="reset()">reset score</button>';

    for (var i = 1; i <= colors_Aantal; i++) {
        var colorId = "color" + i;
        document.getElementById(colorId).style.backgroundColor = colors[i - 1];
    }
}

function start() {
    var loop = document.getElementById("loops").value;
    var sec = document.getElementById("sec").value;
    
    sec = parseInt(sec) * 1000;

    // Reset game-related flags before the loop starts
    gameStarted = true;
    colorClicked = false;
    var gameJustStarted = true;

    setTimeout(function () {
        document.getElementById("start").disabled = true;
    }, 50);

    function runGame(iteration) {
        if (iteration < loop) {

            if (!colorClicked && !gameJustStarted) {
                fout++;
                document.getElementById("fout").innerHTML = fout.toString();
            }

            var shuffledColors = shuffleArray(colors);
            var basiskleurIndex = Math.floor(Math.random() * colors.length);
            document.getElementById("basiskleur").style.backgroundColor = shuffledColors[basiskleurIndex];

            // Reset flags for the next round
            colorClicked = false;
            gameJustStarted = false;

            // Run the next iteration after a delay
            timeoutId = setTimeout(function () {
                runGame(iteration + 1);
            }, sec);

        } else {
            // The loop has finished, reset the game flags
            gameStarted = false;
            setTimeout(function () {
                document.getElementById("start").disabled = false;
            }, 50);
            
        }
    }
    showColor()
    // Start the first iteration
    runGame(0);
}


function stop() {
    var colors_Aantal = document.getElementById("kleuraantal").value;
    gameStarted = false;
    clearTimeout(timeoutId); // Use the stored timeout ID to clear the timeout
    document.getElementById("basiskleur").style.backgroundColor = "gray";
    for (var i = 1; i <= colors_Aantal; i++) {
        var colorId = "color" + i;
        document.getElementById(colorId).style.backgroundColor = "white";
    }
    document.getElementById("start").disabled = false;
}


function reset(){
    document.getElementById("goed").innerHTML = 0;
    document.getElementById("fout").innerHTML = 0;
    goed = 0;
    fout = 0;
}
    

function check(i) {
    if (gameStarted && !colorClicked) {
        colorClicked = true;

        if (document.getElementById("color" + i).style.backgroundColor == document.getElementById("basiskleur").style.backgroundColor) {
            goed++;
            document.getElementById("goed").innerHTML = goed.toString();
        } else {
            fout++;
            document.getElementById("fout").innerHTML = fout.toString();
        }
    }
}


