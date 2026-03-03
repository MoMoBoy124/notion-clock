function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const [mainTime, period] = time.split(" ");

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  document.getElementById("time").textContent = mainTime;
  document.getElementById("ampm").textContent = period;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
