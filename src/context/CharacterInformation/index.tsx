import React, {createContext, ReactNode, useState} from 'react';

export const CharacterInformationContext = createContext({} as any);

export const CharacterInformation: ReactNode = ({children}: any) => {
  const [characterFullInfo, setCharacterFullInfo] = useState([]);
  const [characterHomeWorld, setCharacterHomeWorld] = useState({});

  return (
    <CharacterInformationContext.Provider
      value={{
        characterFullInfo,
        setCharacterFullInfo,
        characterHomeWorld,
        setCharacterHomeWorld,
      }}>
      {children}
    </CharacterInformationContext.Provider>
  );
};
