import React, {
  createContext,
  ReactNode,
  useState,
  ReactChildren,
  ReactChild,
} from 'react';

export const CharacterInformationContext = createContext({} as any);
interface CharacterInformationProps {
  children: () => ReactChildren | ReactChild;
}
export const CharacterInformation: ReactNode = ({
  children,
}: new () => CharacterInformationProps) => {
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
