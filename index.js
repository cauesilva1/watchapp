
let tempo = 1000;
let cronometro;
let hh = 0
let min = 0
let sec = 0

function start(){
    cronometro =  setInterval(() => { timer();
    }, tempo);

    if(start = 1){
        start.disabled = true;
    }
}

function stop(){
    clearInterval(cronometro);
    hh = hh;
    min = min;
    sec = sec;

}

function reset(){
    clearInterval(cronometro);

     hh = 0
     min = 0
     sec = 0

     document.getElementById('hr').innerText = hh
     document.getElementById('min').innerText = min
     document.getElementById('sec').innerText = sec
}

function timer(){
    sec++;

    if(sec == 60){
        sec = 00;
        min++;

        if(min==60){
            min =00;
            hr++;
        }
    }
    document.getElementById('hr').innerText = hh
    document.getElementById('min').innerText = min
    document.getElementById('sec').innerText = sec
}