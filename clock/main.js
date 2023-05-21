const hour = document.getElementById('clock-hour');
const minute = document.getElementById('clock-minutes');

const clock = () =>{
    const date = new Date();

    console.log(date.getHours())
    console.log(date.getMinutes())

    const hh = date.getHours() / 12 * 360;
    const mm = date.getMinutes() / 60 * 360;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
}

setInterval(clock, 1000);
