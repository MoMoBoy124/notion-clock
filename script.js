function updateClock() {
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const dateFormatter = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const timeParts = timeFormatter.formatToParts(now);

  let hour, minute, second, dayPeriod;

  timeParts.forEach(part => {
    if (part.type === "hour") hour = part.value;
    if (part.type === "minute") minute = part.value;
    if (part.type === "second") second = part.value;
    if (part.type === "dayPeriod") dayPeriod = part.value.toUpperCase();
  });

  document.getElementById("time").innerHTML = `
    <span class="time-main">${hour}:${minute}:${second}</span>
    <span class="ampm">${dayPeriod}</span>
  `;

  document.getElementById("date").textContent =
    dateFormatter.format(now);
}

updateClock();
setInterval(updateClock, 1000);
