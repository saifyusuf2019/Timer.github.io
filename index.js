// Main stop Watch Function
var ms = document.getElementById('ms').innerHTML;

function stopwatch() {
    ms++
    if(ms < 10){
        document.getElementById(ms).innerHTML = "0" + ms;
    } else{
        document.getElementById('ms').innerHTML = ms;
    }
     if(ms >= 100){
         var secs = document.getElementById('secs').innerHTML;
         secs++;
         if (secs < 10){
             document.getElementById('secs').innerHTML = "0" + secs;
         }else{
             document.getElementById('secs').innerHTML = secs;
         }        
         ms = 0;        
         document.getElementById('ms').innerHTML = "0" + ms;
     }
     if(secs >= 59) {
         var mins = document.getElementById(mins).innerHTML;
         mins++
         if(mins < 10){
             document.getElementById('mins').innerHTML = "0" + mins;
              }else{
                  document.getElementById('mins').innerHTML = mins;
              }
              secs = 0;

              document.getElementById('secs').innerHTML = "0" + secs;
    }
}
var stop;
function start(){
    stop = setInterval(stopwatch, 10)
}
function stop() {
   stop =  clearInterval(stopwatch);
    
}