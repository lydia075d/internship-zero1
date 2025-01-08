import React from 'react';
import useColorChange from './useColorChange';
import Square from './components/Square';

const App = () => {
  const { color, changeColor, resetColor } = useColorChange();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Color Changing Square</h1>
      <Square color={color} />
      <button onClick={changeColor} style={styles.button}>
        Change Color
      </button>
      <button onClick={resetColor} style={styles.button}>
        Reset Color
      </button>
    </div>
  );
};

const styles = {
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;
