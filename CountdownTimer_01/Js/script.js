const day=document.querySelector("#days");
const hour=document.querySelector("#hours");
const minute=document.querySelector("#minutes");
const second=document.querySelector("#seconds");

function Refresh() {
  const CurrentYear = new Date().getFullYear();
  const NewYear = new Date(`January 1 ${CurrentYear + 1} 00:00:00`);
  const currentdate = new Date();
  const diff = NewYear - currentdate;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24); 
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24); 
  const minutes = Math.floor((diff / 1000 / 60) % 60); 
  const seconds = Math.floor((diff / 1000) % 60); 

  day.innerHTML=days<10? "0"+days:days;
  hour.innerHTML=hours<10? "0"+hours:hours;
  minute.innerHTML=minutes<10? "0"+minutes:minutes;
  second.innerHTML=seconds<10? "0"+seconds:seconds;
}
setInterval(Refresh,1000);



// 1000ms=1s
// 60s=1m
// 60m=1h
// 24h=1d
