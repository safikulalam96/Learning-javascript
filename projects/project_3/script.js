const time=document.getElementById('time')
const date=document.getElementById('date')

var data=new Date();  
var day=data.getDate();  
var month=data.getMonth()+1;  
var year=data.getFullYear();  
date.innerText=(day+"/"+month+"/"+year)

setInterval(function() {
    let date=new Date();
  
    time.innerHTML=date.toLocaleTimeString();
    
}, 1000);