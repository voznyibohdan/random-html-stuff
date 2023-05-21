const hour = document.getElementById('clock-hour');
const minute = document.getElementById('clock-minutes');

const dayElement = document.getElementById('day');
const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

const clock = () =>{
    const date = new Date();

    const hh = date.getHours() / 12 * 360;
    const mm = date.getMinutes() / 60 * 360;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
}

setInterval(clock, 1000);

const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд',];

const digitalClock = () => {
    const date = new Date();

    dayElement.innerText = days[date.getDay()];
    dateElement.innerText = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    timeElement.innerText = `${date.getHours()}:${date.getMinutes()}`;
}

setInterval(digitalClock, 1000);