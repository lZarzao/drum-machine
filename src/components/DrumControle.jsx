import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const DrumControle = ({
  volume,
  handleVolumeChange,
  name,
  groupType,
  changeSoundGroup,
  power,
  onOff,
}) => {
  return (
    <div className='control'>
      <button className={`onOff ${power ? '' : 'isOff'}`} onClick={onOff}>
        {' '}
        Turn {power ? 'OFF' : 'ON'}
      </button>
      <div className='displayContainer'>
        <h2 id='display'>{name ? name : '---'}</h2>
        <div className='displayContainerInfo'>
          <h2>
            Volume: {Math.round(volume * 100)}%
          </h2>
          <h2>Mode: {groupType}</h2>
        </div>
      </div>
      <div className='controlControler'>
        <div>
          <FontAwesomeIcon icon={faVolumeHigh} />
          <input
            max='1'
            min='0'
            step='0.01'
            type='range'
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <button className='changeMode' onClick={changeSoundGroup}>Change Mode</button>
      </div>
    </div>
  );
};

export default DrumControle;
