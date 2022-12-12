import React from 'react';

const Key = ({ sound: { id, key, url, keyCode }, play }) => {
  const handleKeydown = (event) => {
    if (event.keyCode === keyCode) {
      play(key, id);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  });

  return (
    <button id={keyCode} className='drum-pad' onClick={() => play(key, id)}>
      <audio className='clip' id={key} src={url} />
      {key}
    </button>
  );
};

export default Key;
