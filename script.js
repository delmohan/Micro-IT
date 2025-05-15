// Clock Update
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch Variables
let stopwatchTime = 0;
let stopwatchInterval = null;
let running = false;

// Beep Sound
const beep = document.getElementById('beep-sound');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatch() {
  document.getElementById('stopwatch').textContent = formatTime(stopwatchTime);
}

function startStopwatch() {
  if (!running) {
    beep.play();
    running = true;
    const startTime = Date.now() - stopwatchTime;
    stopwatchInterval = setInterval(() => {
      stopwatchTime = Date.now() - startTime;
      updateStopwatch();
    }, 1000);
  }
}

function stopStopwatch() {
  if (running) {
    beep.play();
    clearInterval(stopwatchInterval);
    running = false;
  }
}

function resetStopwatch() {
  beep.play();
  clearInterval(stopwatchInterval);
  running = false;
  stopwatchTime = 0;
  updateStopwatch();
  document.getElementById('laps').innerHTML = "";
}

function lapTime() {
  if (running) {
    const lapItem = document.createElement('li');
    lapItem.textContent = formatTime(stopwatchTime);
    document.getElementById('laps').appendChild(lapItem);
  }
}

// Theme toggle
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("light");
});
// ParticleJS config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ffcc"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.4,
      "random": true
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffcc",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      }
    }
  },
  "retina_detect": true
});
