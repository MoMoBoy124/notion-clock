function updateClock() {
  const now = new Date();
  document.getElementById("time").textContent = 
      now.toLocaleTimeString([], {
  hour:"2-digit",
  minute:"2-digit",
  second:"2-digit",
  hour12: false
});
  document.getElementById("date").textContent =
      now.toLocaleDateString([], {weekday:"long", month:"long", day:"numeric"});
}
setInterval(updateClock, 1000);
updateClock();
