`use strict`;
function my_clock(){
    let date= new Date();
let hours= date.getHours();
let min= date.getMinutes();
let sec=date.getSeconds();
let period="AM";
if(hours==0){
    hours=12;
}
else if(hours>=12) {
    hours=hours-12;
    period="PM"

    
}
document.getElementById('clock').innerText=hours+":"+min+":"+sec+" "+period;
setTimeout(my_clock,1000);

};
my_clock();
