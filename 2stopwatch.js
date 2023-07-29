const start=document.getElementById("start");
const pause=document.getElementById("pause");
const resume=document.getElementById("resume");
const displayTime=document.getElementById("display");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const reset=document.getElementById("reset");
const para=document.getElementById("countdown");
const sound=document.getElementById("sound");
const musicSound =new Audio("timer.mp3");
const wow=0;
start.addEventListener("click",function(){
    const hoursValue =hours.value;
    const minutesValue = minutes.value;
    const secondsValue = seconds.value;
    displayTime.value = hoursValue + ":" + minutesValue + ":" + secondsValue;
    let startingHours = hours.value *3600;
    let startingMinutes = minutes.value *60;
    let startingSeconds = seconds.value *1;
    let totalSec = startingHours +startingMinutes + startingSeconds;
    let myInterval= setInterval(timer,1000);
    pause.addEventListener("click",function(){
        clearInterval(myInterval);
    });
    resume.addEventListener("click",function(){
        myInterval=setInterval(timer, 1000);
    });
    function timer(){
        const newHours =Math.floor(totalSec/3600);
        const newMinutes =Math.floor((totalSec/60)%60);
        const newSeconds =Math.floor(totalSec%60);
        displayTime.value = `${newHours}:${newMinutes}:${newSeconds}`;
        if(totalSec>0) totalSec--;
        if(totalSec===0) musicSound.play();
    }
    reset.addEventListener("click",function(){
        window.location.reload();
    });
});