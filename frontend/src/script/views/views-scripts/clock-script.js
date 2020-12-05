

setInterval(changeTime, 1000);


function changeTime() {
    const second = document.querySelector(".second");
    const minute = document.querySelector(".minute");
    const hour = document.querySelector(".hour");



    var time = new Date(); 
    var seconds =+ time.getSeconds() * 360 /60 + 270;
    var minutes = time.getMinutes() * 360 /60 - 90;
    var hours = time.getHours() * 360 /12- 90;
    console.log(seconds);
    second.style.transform = `rotate(${seconds}deg)`;
    minute.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;


}
