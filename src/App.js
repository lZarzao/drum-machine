import './App.css';
import { firstSoundsGroup } from './sounds';
import { secondSoundsGroup } from './sounds';
import Keyboard from './components/keyboard';

function App() {



  return (
    <div className='App'>
      <main id='drum-machine'>
        <Keyboard soundsGroup={firstSoundsGroup} />
      </main>
    </div>
  );
}

export default App;
