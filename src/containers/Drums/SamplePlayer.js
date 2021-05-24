import { useState, useRef, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { playRhythm } from 'utils/rhythm';

export default function SamplePlayer() {
  const ref = useRef();
  const rhytmsFromStorage = JSON.parse(localStorage.getItem("rhythms")) || {};
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    clearInterval(ref.current);
  }, [value])

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDeleteRhythm = () => {
    delete rhytmsFromStorage[value];
    localStorage.setItem('rhythms', JSON.stringify(rhytmsFromStorage));
    clearInterval(ref.current);
    setValue("")
    // history.push(`/${type}`);
  }
  const handlePlayRhythm = () => {
    const currentBeat = rhytmsFromStorage[value];
    const { playPressTime, data } = currentBeat;
    playRhythm(data);
    const soundLengthMS = data[data.length - 1].time - data[0].time;
    clearInterval(ref.current);
    ref.current = setInterval(
      () => {
        playRhythm(data);
      },
      soundLengthMS + (playPressTime - data[data.length - 1].time)
    );
  };

  return <div>
    <FormControl>
      <InputLabel id="select-label">Choose sample</InputLabel>
      <Select
        labelId="select-label"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
        style={{
          minWidth: 150,
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.keys(rhytmsFromStorage).map(k => (
          <MenuItem key={k} value={k}>
            {k}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    {value && <>
      <Button onClick={handlePlayRhythm}>
        Play
      </Button>
      <Button onClick={handleDeleteRhythm}>
        Delete
      </Button>
    </>}
  </div>
}