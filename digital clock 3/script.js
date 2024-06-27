"use strict";
// // "use strict";
// const clock = document.querySelector(".clock");

// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// const ampm = document.querySelector(".ampm");

// setInterval(() => {
//   const now = new Date();
//   let hr = now.getHours();
//   let min = now.getMinutes();
//   let sec = now.getSeconds();

//   let am;
//   hour.textContent = hr < 10 ? "0" + hr : hr;
//   minute.textContent = min < 10 ? "0" + min : min;
//   second.textContent = sec < 10 ? "0" + sec : sec;
//   ampm.textContent = am = hr >= 12 ? "PM" : "AM";
// });
// /*
// Alternative way of writing the above code.
// */

// // setInterval(() => {
// //   const digital = new Date();
// //   const options = {
// //     hour: "numeric",
// //     minute: "numeric",
// //     second: "numeric",
// //   };

// //   clock.textContent = new Intl.DateTimeFormat(clock.local, options).format(
// //     digital
// //   );
// // });

const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");
const am = document.getElementById("am");

setInterval(() => {
  const currentTime = new Date();
  let hr = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let AM = hr > 12 ? "PM" : "AM";

  hr = hr > 12 ? hr - 12 : hr;

  hour.innerHTML = hr;
  minute.innerHTML = (min < 10 ? "0" : "") + min;
  second.innerHTML = (sec < 10 ? "0" : "") + sec;
  am.innerHTML = AM;
});
