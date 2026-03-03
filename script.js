<script>

let serverOffset = 0;

// Fetch accurate Sydney time
async function syncSydneyTime() {
  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone/Australia/Sydney");
    const data = await res.json();

    const serverTime = new Date(data.datetime).getTime();
    const localTime = Date.now();

    serverOffset = serverTime - localTime;
  } catch (e) {
    console.log("Time sync failed, using local clock.");
  }
}

// Get accurate Sydney time
function getSydneyTime() {
  return new Date(Date.now() + serverOffset);
}

// Format clock properly
function updateClock() {
  const now = getSydneyTime();

  const formatter = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const parts = formatter.formatToParts(now);

  let hour, minute, second, dayPeriod;

  parts.forEach(part => {
    if (part.type === "hour") hour = part.value;
    if (part.type === "minute") minute = part.value;
    if (part.type === "second") second = part.value;
    if (part.type === "dayPeriod") dayPeriod = part.value.toUpperCase(); // force AM / PM
  });

  document.getElementById("clock").textContent =
    `${hour}:${minute}:${second} ${dayPeriod}`;
}

// Initialize
async function initClock() {
  await syncSydneyTime();
  updateClock();
  setInterval(updateClock, 1000);

  // Re-sync every hour for accuracy
  setInterval(syncSydneyTime, 3600000);
}

initClock();

</script>
