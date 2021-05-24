import VolumeControl from "./VolumeControl";
import DrumKeyboard from "./DrumKeyboard";
import SamplePlayer from "./SamplePlayer";

function DrumMachine() {
  return (
    <div id="drum-machine">
      <DrumKeyboard />
      <div id="controls">
        <VolumeControl />
      </div>
      <SamplePlayer />
    </div>
  );
}

export default DrumMachine;
