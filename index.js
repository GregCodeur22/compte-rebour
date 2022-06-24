let totalSeconds;
let form = document.querySelector("form");
let display = document.getElementById("countDownDisplay");
let interval;

function COuntDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let sec = seconds < 10 ? `0${seconds}` : seconds;

  console.log(minutes, seconds);
  display.textContent = ` ${minutes} : ${sec} `;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    display.textContent = `c'est términé ! `;
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("entrez un nombre ou un chiffre");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(COuntDown, 1000);
  }
});
