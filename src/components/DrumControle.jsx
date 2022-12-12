import React from 'react';

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
      <button className='onOff' onClick={onOff}> Turn {power ? 'OFF' : 'ON'}</button>
      <h2>Volume: %{Math.round(volume * 100)}</h2>
      <input
        max='1'
        min='0'
        step='0.01'
        type='range'
        value={volume}
        onChange={handleVolumeChange}
      />
      <h2>Mode: {groupType}</h2>
      <h2 id='display'>{name}</h2>
      <button onClick={changeSoundGroup}>Change Sound Group</button>
    </div>
  );
};

export default DrumControle;
