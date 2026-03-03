function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  // Split time and AM/PM
  const [mainTime, period] = time.split(" ");

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  // Insert AM/PM inside a span for styling
  document.getElementById("time").innerHTML =
    `${mainTime} <span class="ampm">${period}</span>`;

  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
