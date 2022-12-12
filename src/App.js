import './App.css';
import React, { useState } from 'react';
import { firstSoundGroup } from './sounds';
import { secondSoundGroup } from './sounds';
import Keyboard from './components/keyboard';
import DrumControle from './components/DrumControle';

function App() {
  const [soundGroup, setSoundGroup] = useState(firstSoundGroup);
  const [groupType, setGroupType] = useState('Heater Kit');
  const [soundName, setSoundName] = useState('');
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true)

  const changeSoundGroup = () => {
    setSoundName('');
    if (groupType === 'Heater Kit') {
      setSoundGroup(secondSoundGroup);
      setGroupType('Smooth Piano Kit');
    } else {
      setSoundGroup(firstSoundGroup);
      setGroupType('Heater Kit');
    }
  };

  const play = (key, id) => {
    setSoundName(id);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const onOff = () => {
    setPower(!power)
  }

  return (
    <div className='App'>
      <main id='drum-machine'>
        <div className='wrapper'>
          <Keyboard soundsGroup={soundGroup} play={play} power={power}/>
          <DrumControle
            volume={volume}
            handleVolumeChange={handleVolumeChange}
            name={soundName}
            groupType={groupType}
            changeSoundGroup={changeSoundGroup}
            power={power}
            onOff={onOff}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
