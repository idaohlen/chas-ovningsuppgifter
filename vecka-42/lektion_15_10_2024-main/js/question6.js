/* Du arbetar på Stockholm Maratan och du ska skriva ett program som lägger ihop två tider 
   på formatet "TT:MM:SS" */

const lopp1 = "01:01:15";
const lopp2 = "01:15:59";

function addZero(time) {
   if (time < 10) {
     return `0${time}`;
   }
   return time;
}

function addTime(time1, time2) {
   const time1Array = time1.split(":");
   const time2Array = time2.split(":");
     let hours = parseInt(time1Array[0]) + parseInt(time2Array[0]);
     let minutes = parseInt(time1Array[1]) + parseInt(time2Array[1]);
     let seconds = parseInt(time1Array[2]) + parseInt(time2Array[2]);

     if (seconds >= 60) {
       seconds -= 60;
       minutes++;
     }

     if (minutes >= 60) {
       minutes -= 60;
       hours++;
     }

     return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

console.log(addTime(lopp1, lopp2));
