var sec=0
var min=0
var hr=0
var interval

function start(){
    chronometer()
    interval= setInterval(chronometer,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('chronometer').innerText='00:00:00'
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function chronometer(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('chronometer').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}