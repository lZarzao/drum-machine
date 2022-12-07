import React from 'react';

const Keyboard = ({ soundsGroup }) => {
  
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return soundsGroup.map((sound) => (
    <button key={sound.id} className='drum-pad' onClick={() => play(sound.key)}>
      <audio className='clip' id={sound.key} src={sound.url} />
      {sound.key}
    </button>
  ));
};

export default Keyboard;
