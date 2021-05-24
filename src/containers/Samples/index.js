import { useEffect, useRef } from 'react';
import PageHeader from "components/PageHeader";
import { useRouteMatch } from "react-router-dom";
import { playRhythm } from 'utils/rhythm';
import { withRouter } from 'react-router-dom'

import './styles.scss';
import VolumeControl from 'containers/Shared/VolumeControl';

function BeatsPage({ history }) {
  const ref = useRef();
  const match = useRouteMatch();
  const id = match.params.id;
  const type = match.params.type;
  const handleDeleteRhythm = () => {
    const rhytmsFromStorage = JSON.parse(localStorage.getItem(type));
    delete rhytmsFromStorage[id];
    localStorage.setItem(type, JSON.stringify(rhytmsFromStorage));
    history.push(`/${type}`);
  }
  const handlePlayRhythm = () => {
    const rhytmsFromStorage = JSON.parse(localStorage.getItem(type));
    const currentBeat = rhytmsFromStorage[id];
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

  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    }
  }, [id])

  return <div className="beats-page">
    <PageHeader title="Beats Page" subtitle="Your beat samples" />
    <button onClick={handlePlayRhythm}>Play </button>
    <button onClick={handleDeleteRhythm}>Delete </button>
    <div className="page-content" id="test">
      <VolumeControl />
    </div>
  </div>
}

export default withRouter(BeatsPage)
