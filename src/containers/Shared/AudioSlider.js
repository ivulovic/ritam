import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    marginTop: '2rem'
  },
  slider: {
    color: '#6731a3'
  }
});

export default function AudioSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(100);

  useEffect(() => {
    setValue(parseInt(localStorage.getItem("volume")));
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("volume", newValue);
    props.volumeSetter(newValue / 100);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" className={classes.slider} />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}