import VolumeControl from "containers/Shared/VolumeControl";
import DrumKeyboard from "containers/Shared/DrumKeyboard";

function DrumMachine() {
  return (
    <div id="drum-machine">
      <DrumKeyboard />
      <div id="controls">
        <VolumeControl />
      </div>
    </div>
  );
}

export default DrumMachine;
