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

  // Couleur dynamique pour les millisecondes
  const msColor = millis % 2 === 0 ? 'var(--green)' : 'var(--muted)';

  const humanStr = `${year}-${z(month)}-${z(day)} ${z(hrs)}:${z(mins)}:${z(secs)}:` +
                   `<span style="color:${msColor}">${z(millis,3)}</span>`;

  // Affichage fuseau horaire
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  human.innerHTML = `${humanStr} (${tz})`;
  unix.textContent = `${msEpoch}`;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);