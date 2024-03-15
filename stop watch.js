let millseconds=0,seconds=0,minutes=0,hours=0;
let timeshow=document.getElementById('timeshow')
let timeref;

document.getElementById('Start').onclick =function(){
    timeref=setInterval(updateTime,10)
}

function updateTime(){
    millseconds=millseconds+10;
    if(millseconds==1000){
        seconds=seconds+1;
        millseconds=0;
        if(seconds==60){
            minutes=minutes+1;
            seconds=0;
            if(minutes==60){
                hours=hours+1;
                minutes=0;
            }
        }
    }

    let h,m,s,ms;
    if(hours<10){
        h='0'+hours;
    }
    else{
        h=hours;
    }
    if(minutes<10){
        m='0'+minutes;

    }
    else{
        m=minutes;
    }
    if(seconds<10){
        s='0'+seconds;

    }
    else{
        s=seconds;
    }
    if(millseconds<10){
        ms='0'+millseconds;
    }
    else if(millseconds<100){
        ms='00'+millseconds;
    }
    else{
        ms=millseconds;
    }

    timeshow.innerHTML=`${h} : ${m} : ${s} : ${ms}`

}    

document.getElementById('Pause').onclick=function(){
    clearInterval(timeref)
}

document.getElementById('Reset').onclick=function(){
    clearInterval(timeref)
    millseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    timeshow.innerHTML="00 : 00 : 00 : 00"
}
