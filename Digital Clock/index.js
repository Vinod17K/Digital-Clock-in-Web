const hoursEle=document.getElementById("hour");
const minutesEle=document.getElementById("minutes");
const secondsEle=document.getElementById("seconds");
const amPmEle=document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h>12){
        h=h-12;
        ampm="PM"
    }
    h= h<10 ? "0" +h : h;
    m= m<10 ? "0" +m : m;
    s= s<10 ? "0" +s : s;

    hoursEle.innerText=h;
    minutesEle.innerText=m;
    secondsEle.innerText=s;
    amPmEle.innerText=ampm
    setTimeout(()=>{
        updateClock()
    },1000)


}

updateClock()