import React, { useState, useEffect } from "react";
import { playSound } from 'utils/rhythm';
import DrumKeyboardControls from "./DrumKeyboardControls";

const keyboardFirstRow = [
  { key: 'Q' },
  { key: 'W' },
  { key: 'E' },
  { key: 'R' },
  { key: 'T' },
  { key: 'Y' },
  { key: 'U' },
  { key: 'I' },
  { key: 'O' },
  { key: 'P' },
]
const keyboardSecondRow = [
  { key: 'A' },
  { key: 'S' },
  { key: 'D' },
  { key: 'F' },
  { key: 'G' },
  { key: 'H' },
  { key: 'J' },
  { key: 'K' },
  { key: 'L' },
]
const keyboardThirdRow = [
  { key: 'Z', css: 'inactive' },
  { key: 'X', css: 'inactive' },
  { key: 'C', css: 'inactive' },
  { key: 'V', css: 'inactive' },
  { key: 'B', css: 'inactive' },
  { key: 'N', css: 'inactive' },
  { key: 'M', css: 'inactive' },
]

function DrumKeyboard() {
  const [rhythms, setRhythms] = useState([]);
  useEffect(() => {
    const keyboardElement = document.getElementById("drum-keyboard");
    keyboardElement.addEventListener("keydown", handleKeyDown);
    return () => {
      keyboardElement.removeEventListener("keydown", () => { });
    };
  }, []);

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    // if audioElement exist add
    if (document.getElementById(key)) {
      playSound(key);
      const time = new Date().getTime();
      setRhythms((s) => s.concat({ key, time }));
    }
  };

  const renderButtons = (arr) => {
    return arr.map((x) => (
      <button
        key={x.key}
        name={x.key}
        onClick={() => playSound(x.key)}
        className={`key enabled ${x.css}`}
      >
        {x.key}
      </button>
    ))
  }

  return (
    <div id="button-container">
      <div id="drum-keyboard">
        <div className="keyboard-base">
          <div className="key">~</div>
          <div className="key">1</div>
          <div className="key">2</div>
          <div className="key">3</div>
          <div className="key">4</div>
          <div className="key">5</div>
          <div className="key">6</div>
          <div className="key">7</div>
          <div className="key">8</div>
          <div className="key">9</div>
          <div className="key">0</div>
          <div className="key">-</div>
          <div className="key">+</div>
          <div className="key delete">Delete</div>
          <div className="key tab">Tab</div>
          {renderButtons(keyboardFirstRow)}
          <div className="key">[</div>
          <div className="key">]</div>
          <div className="key backslash">\</div>
          <div className="key capslock">CapsLock</div>
          {renderButtons(keyboardSecondRow)}
          <div className="key">;</div>
          <div className="key">'</div>
          <div className="key return">Return</div>
          <div className="key leftshift">Shift</div>
          {renderButtons(keyboardThirdRow)}
          <div className="key">,</div>
          <div className="key">.</div>
          <div className="key">/</div>
          <div className="key rightshift">Shift</div>
          <div className="key leftctrl">Ctrl</div>
          <div className="key">Alt</div>
          <div className="key command">Command</div>
          <div className="key space">Space</div>
          <div className="key command">command</div>
          <div className="key">Alt</div>
          <div className="key">Ctrl</div>
          <div className="key">Fn</div>
        </div>
      </div>

      <DrumKeyboardControls
        rhythms={rhythms}
      />
    </div>
  );
}

export default DrumKeyboard;
