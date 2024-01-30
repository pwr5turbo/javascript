let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function start(){
    if (!timer){
        timer = true;
        stopwatch();
    }
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

function stopwatch(){
    if(timer){
        count ++;

        if (count == 100){
            sec++;
            count = 0;
        }

        if (sec == 60){
            min++;
            sec = 0;
        }

        if (min == 60){
            hour++;
            min = 0;
        }

        let hourString = hour; 
        let minString = min; 
        let secString = sec; 
        let countString = count; 

        if (count < 10){
            countString = "0" + countString;
        }

        if (sec < 10){
            secString = "0" + secString;
        }

        if (min < 10){
            minString = "0" + minString;
        }

        if (hour < 10){
            hourString = "0" + hourString;
        }

        document.getElementById('hour').innerHTML = hourString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}