import React, {createContext, useState} from 'react';

const CharacterInformationContext = createContext({} as any);

const CharacterInformation: React.FC = ({children}) => {
  const [characterFullInfo, setCharacterFullInfo] = useState([]);
  const [characterHomeWorld, setCharacterHomeWorld] = useState({});
  const [globalTheme, setGlobalTheme] = useState(true);

  return (
    <CharacterInformationContext.Provider
      value={{
        characterFullInfo,
        setCharacterFullInfo,
        characterHomeWorld,
        setCharacterHomeWorld,
        globalTheme,
        setGlobalTheme,
      }}>
      {children}
    </CharacterInformationContext.Provider>
  );
};

export {CharacterInformationContext, CharacterInformation};
