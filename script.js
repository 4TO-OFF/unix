const human = document.getElementById('human');
const unix = document.getElementById('unix');

function z(n, d=2) {
return String(n).padStart(d, '0');
}

function update() {
const msEpoch = Date.now();
const now = new Date(msEpoch);
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hrs = now.getHours();
const mins = now.getMinutes();
const secs = now.getSeconds();
const millis = now.getMilliseconds();

const humanStr = ${year}-${z(month)}-${z(day)} ${z(hrs)}:${z(mins)}:${z(secs)}:${z(millis,3)};

human.textContent = humanStr;
unix.textContent = ${msEpoch};

requestAnimationFrame(update);
}