
export const delay = (timeout, callback) => setTimeout(callback, timeout);

const handleKeyboardMark = (id) => {
  const [ele] = document.getElementsByName(id);
  if (ele) {
    ele.style.background = "var(--secondary)";
    ele.style.color = "white";
    setTimeout(() => {
      ele.style.background = "";
      ele.style.color = "black";
    }, 100);
  }
}

export function playSound(id) {
  const ele = document.getElementById(id);
  if (ele) {
    ele.currentTime = 0;
    ele.play();
    handleKeyboardMark(id)
  }
}

export const playRhythm = (rhythms) => {
  if (rhythms.length) {
    const leadSound = rhythms[0];
    playSound(leadSound.key);
    for (let i = 1; i < rhythms.length; i++) {
      delay(rhythms[i].time - leadSound.time, () => {
        let currentRhythm = rhythms[i];
        playSound(currentRhythm.key);
      });
    }
  }
};