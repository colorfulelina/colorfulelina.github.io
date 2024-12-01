// Add a dynamic greeting based on the time of day
const greetingElement = document.createElement('p');
const hours = new Date().getHours();

if (hours < 12) {
    greetingElement.textContent = "Good morning! Welcome to my website.";
} else if (hours < 18) {
    greetingElement.textContent = "Good afternoon! Thanks for stopping by.";
} else {
    greetingElement.textContent = "Good evening! Hope you enjoy learning about me.";
}

greetingElement.style.fontSize = "1.2rem";
greetingElement.style.marginTop = "1rem";
greetingElement.style.color = "#f8c8dc";

document.getElementById('about').appendChild(greetingElement);
