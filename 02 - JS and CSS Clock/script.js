const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

console.log(seconds);

let time = undefined;
const getCurrentTime = () => {
    time = new Date();
    seconds.style.transform = `rotate(${time.getSeconds()*6}deg)`;
    minute.style.transform = `rotate(${time.getMinutes()*6}deg)`;
    hour.style.transform = `rotate(${time.getHours()*30}deg)`;

}

setInterval(getCurrentTime, 1000);