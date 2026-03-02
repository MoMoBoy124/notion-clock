function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
