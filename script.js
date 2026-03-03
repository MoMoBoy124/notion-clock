function updateClock() {
  const now = new Date();

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const [mainTime, period] = timeString.split(" ");

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  document.getElementById("time").innerHTML =
    `${mainTime}<span class="ampm">${period}</span>`;

  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
