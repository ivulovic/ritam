import { useState, useEffect } from "react";
import AudioList from "./AudioList";
import AudioSlider from "./AudioSlider";

// It's good performance-wise to cache the audio elements as we are setting the volume globally to every element.
let audioElements = [];

export default function VolumeControl() {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    audioElements = Array.from(document.getElementsByClassName("clip"));
    const storageVolume = localStorage.getItem("volume") || 100;
    setVolume(storageVolume / 100)
  }, []);

  useEffect(() => {
    audioElements.forEach((element) => {
      element.volume = volume;
    });
  }, [volume]);

  return <div>
    <div id="volume-control">
      <AudioSlider volumeSetter={setVolume} />
    </div>
    <AudioList />
  </div>
}