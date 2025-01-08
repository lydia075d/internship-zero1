import { useState } from 'react';

const useColorChange = (defaultColor = 'black') => {
  const [color, setColor] = useState(defaultColor);

  // Function to change color to red
  const changeColor = () => {
    setColor('red');
  };

  // Function to reset color to default (black)
  const resetColor = () => {
    setColor(defaultColor);
  };

  return { color, changeColor, resetColor };
};

export default useColorChange;
