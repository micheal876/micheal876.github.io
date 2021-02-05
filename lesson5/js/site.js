const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false)

try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date(). toLocaleDateString('en-US', options);   
} catch (e) {
    alert(' browser does not support Locate');
}

const d = new Date();
const dayName = days[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById("currentDate").textContent = fulldate;