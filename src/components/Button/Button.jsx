import React from 'react';
import { useColorMode } from 'theme-ui';
import { HiMoon, HiSun } from 'react-icons/hi2';

import { Btn } from './Button.styled';

export const Button = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Btn
      onClick={e => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      {colorMode === 'light' ? <HiSun size={18} /> : <HiMoon size={14} />}
    </Btn>
  );
};
