const travisAudioRoot = '/ritam/Audio/Rhythm/travis';
const cloudinaryAudioRoot = '/ritam/Audio/Rhythm/cloudinary';
const neuralAudioRoot = '/ritam/Audio/Rhythm/neural';

export const list = [
  { keyboardKey: 'Q', src: `${travisAudioRoot}/chant.mp3` },
  { keyboardKey: 'W', src: `${neuralAudioRoot}/clap-vh.mp3` },
  { keyboardKey: 'E', src: `${travisAudioRoot}/clap_1.mp3` },
  { keyboardKey: 'R', src: `${travisAudioRoot}/clap_2.mp3` },
  { keyboardKey: 'T', src: `${travisAudioRoot}/kick_1.mp3` },
  { keyboardKey: 'Y', src: `${travisAudioRoot}/kick_2.mp3` },
  { keyboardKey: 'U', src: `${cloudinaryAudioRoot}/cowbell.mp3` },
  { keyboardKey: 'I', src: `${travisAudioRoot}/snare.mp3` },
  { keyboardKey: 'O', src: `${cloudinaryAudioRoot}/snare.mp3` },
  { keyboardKey: 'P', src: `${neuralAudioRoot}/flares-snare-vh.mp3` },

  { keyboardKey: 'A', src: `${travisAudioRoot}/hat_closed.mp3` },
  { keyboardKey: 'S', src: `${travisAudioRoot}/hat_open.mp3` },
  { keyboardKey: 'D', src: `${travisAudioRoot}/crash.mp3` },
  { keyboardKey: 'F', src: `${cloudinaryAudioRoot}/crash.mp3` },
  { keyboardKey: 'G', src: `${cloudinaryAudioRoot}/hi_tom.mp3` },
  { keyboardKey: 'H', src: `${neuralAudioRoot}/slamdam-tom-low-vh.mp3` },
  { keyboardKey: 'J', src: `${neuralAudioRoot}/slamdam-tom-high-vh.mp3` },
  { keyboardKey: 'K', src: `${neuralAudioRoot}/slamdam-tom-mid-vh.mp3` },
  { keyboardKey: 'L', src: `${neuralAudioRoot}/rim-vh.mp3` },

]

export default function AudioList() {
  return <div>
    {list.map(x => (
      <audio
        key={x.keyboardKey}
        className="clip"
        id={x.keyboardKey}
        src={x.src}
        preload="auto"
      ></audio>
    ))}
  </div>
}