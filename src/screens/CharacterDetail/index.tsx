import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Container, Header} from './styles';
import {CharactersDTO} from '../../services/dtos/CharactersDTO';

export const CharacterDetail: React.FC = () => {
  const {params} = useRoute();
  const character = params;
  // const {character} = params;
  console.log('params: ', params);
  return (
    <Container>
      <Header />
      <Text>{character.name}</Text>
      <Text>{character.gender}</Text>
      <Text>{character.hair_color}</Text>
      <Text>{character.eye_color}</Text>
      <Text>{character.skin_color}</Text>
    </Container>
  );
};
