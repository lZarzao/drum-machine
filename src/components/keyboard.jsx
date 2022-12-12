import React from 'react';
import Key from './key';

const Keyboard = ({ soundsGroup, play, power }) => {
  return (
    <div className='keyboard'>
      {power
        ? soundsGroup.map((sound) => (
            <Key sound={sound} play={play} key={sound.id} />
          ))
        : soundsGroup.map((sound) => (
            <Key sound={{ ...sound, url: '#' }} play={play} key={sound.id} />
          ))}
    </div>
  );
};

export default Keyboard;
