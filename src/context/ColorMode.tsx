import React, { useState, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

interface State {
  colorMode: Theme;
  onToggle: () => void;
}

const colorModeContext = createContext<State | null>(null);

export const useColorMode = () => useContext(colorModeContext);

interface Props {
  children: React.ReactNode;
}

export const ColorModeProvider: React.FC<Props> = ({ children }) => {
  const value = useProvideColorMode();
  return (
    <colorModeContext.Provider value={value}>
      {children}
    </colorModeContext.Provider>
  );
};

function useProvideColorMode(): State {
  const [colorMode, setColorMode] = useState<Theme>('light');

  const onLight = () => {
    setColorMode('light');
  };

  const onDark = () => {
    setColorMode('dark');
  };

  const onToggle = () => {
    const action = colorMode === 'light' ? onDark : onLight;
    action();
  };

  return {
    colorMode,
    onToggle,
  };
}
