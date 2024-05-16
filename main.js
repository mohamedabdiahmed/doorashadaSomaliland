let doorasho = new Date("november 13, 2024 00:00:00").getTime();

function countdown() {
  let today = new Date().getTime();

  let gap = doorasho - today;
  let seconds = 1000;
  let minute = seconds * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / seconds);

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
}

setInterval(function () {
  countdown();
}, 1000);
