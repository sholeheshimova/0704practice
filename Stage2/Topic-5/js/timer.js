//task1
const showMes = document.querySelector("#showMes")
const mesParag = document.querySelector("#mesParag")


showMes.addEventListener("click", function () {
    console.log(mesParag.textContent);
    
   setTimeout(() =>{
          mesParag.textContent += ` The delayed Message`
   },3000)
   mesParag.textContent = ""
})


// Simple Digital Clock

const clock = document.querySelector("#clock");

setInterval(function () {
       const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    if (minutes < 10) {
       minutes = "0" + minutes
    }
    if (seconds < 10) {
       seconds = "0" + seconds
    }

       clock.textContent = `${hours}:${minutes}:${seconds}`
},1000)



// Start, Stop

const timer = document.querySelector("#timer")
const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")


let seconds = 10;

let interval;


startBtn.addEventListener("click", function () {
       
    interval = setInterval(function () {

        seconds--;

        timer.textContent = seconds;

        if (seconds === 0) {
            clearInterval(interval);
        }
},1000)
})


stopBtn.addEventListener("click", function () {
       clearInterval(interval)
});


// Flashing Text

const text = document.querySelector("#text")
const flashStopBtn = document.querySelector("#flashStopBtn")


const interval1 = setInterval(() => {
       if (text.style.display === "none") {
               text.style.display = "block";
       }else{
              text.style.display = "none";
       }
}, 500);

flashStopBtn.addEventListener("click", function () {
       clearInterval(interval1)
})