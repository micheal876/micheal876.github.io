function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
    }
    
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    const d = new Date();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
    document.getElementById("currentDate").textContent = fulldate;




const tempNumber = parseFloat(document.getElementById("temp").textContent);

const speedNumber = parseFloat(document.getElementById("speed").textContent);

let wc = 35.74 + (0.6215 * tempNumber) - (37.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

wc = Math.round(wc);

if(tempNumber <= 50 && speedNumber > 3) {
    document.getElementById("chill").textContent = "Wind Chill is " +wc+ "\xB0F"; 
} else {
    document.getElementById("chill").textContent = "No Wind Chill today"
}