//global variable
let mileSecond = 0;
let second = 0;
let minute = 0;
let hours = 0;
let intervalId;

// dom reference
const h = document.getElementById("h"),
  m = document.getElementById("m"),
  s = document.getElementById("s"),
  mile = document.getElementById("mile"),
  startButton = document.getElementById("start-btn"),
  stopButton = document.getElementById("stop-btn"),
  resetButton = document.getElementById("reset-btn");

// event handler
function start() {
  ++mileSecond;
  startButton.setAttribute("disabled", "disabled");
  stopButton.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");

  if (mileSecond === 100) {
    ++second;
    s.innerText = second < 10 ? `0${second}` : second;
    mileSecond = 0;

    if (second === 60) {
      ++minute;
      m.innerText = minute < 10 ? `0${minute}` : minute;
      second = 0;

      if (minute === 60) {
        ++hours;
        minute = 0;
        h.innerText = hours < 10 ? `0${hours}` : hours;
      }
    }
  } else {
    mile.innerText = mileSecond;
  }
}
function stop() {
  startButton.removeAttribute("disabled");
  clearInterval(intervalId);
  stopButton.setAttribute("disabled", "disabled");
}
function reset() {
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", "disabled");
  resetButton.setAttribute("disabled", "disabled");

  mileSecond = 0;
  // reset all value
  mile.innerText = "00";
  h.innerText = "00";
  s.innerText = "00";
  m.innerText = "00";
  clearInterval(intervalId);
}

// event listener
startButton.addEventListener("click", () => {
  intervalId = setInterval(() => {
    start();
  }, 10);
});
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
