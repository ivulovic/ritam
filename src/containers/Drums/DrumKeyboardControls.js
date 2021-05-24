import React, { useState, useRef } from "react";
import { playRhythm } from 'utils/rhythm';

function DrumKeyboardControls({ rhythms }) {
  const ref = useRef();
  const [playPressTime, setPlayPressTime] = useState();
  const [name, setName] = useState('');

  const handlePlayRhythm = () => {
    if (rhythms.length) {
      const time = new Date().getTime();
      setPlayPressTime(time)
      playRhythm(rhythms);
      const soundLengthMS = rhythms[rhythms.length - 1].time - rhythms[0].time;
      clearInterval(ref.current);
      ref.current = setInterval(
        () => {
          playRhythm(rhythms)
        },
        soundLengthMS + (time - rhythms[rhythms.length - 1].time)
      );
    }
  };

  const handleRhythmSave = () => {
    if (rhythms.length) {
      let savedItems = JSON.parse(localStorage.getItem("rhythms")) || {};
      const length = Object.keys(savedItems).length;
      const defaultName = `rhythm${length + 1}`;
      savedItems[name || defaultName] = {
        playPressTime,
        data: rhythms,
      };
      localStorage.setItem("rhythms", JSON.stringify(savedItems));
    }
  }


  return (
    <div className="keyboard-controls">
      <div>
        <button className="drum-pad" onClick={handlePlayRhythm}>
          PLAY
        </button>
        <button className="drum-pad" onClick={handleRhythmSave}>
          SAVE
        </button>
      </div>
      <div className="form">
        <input placeholder="Name of sample" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default DrumKeyboardControls;
