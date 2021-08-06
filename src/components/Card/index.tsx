import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import {useFetch} from '../../services/hooks/useFetch';

import {
  Container,
  CardAlignment,
  CardTitle,
  CardField,
  BabyYodaAnimation,
} from './styles';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {CharactersHomeWorldDTO} from '../../services/dtos/CharactersHomeWorldDTO';

interface Props {
  character: CharactersDTO;
  onPress: () => void;
}

function Card({character, onPress}: Props) {
  const {data} = useFetch<CharactersHomeWorldDTO>(character.url);

  const characterHomeWorldUrl = data?.result.properties.homeworld;

  const {data: userData} = useFetch<CharactersHomeWorldDTO>(
    characterHomeWorldUrl,
  );

  const characterHomeWorldName = userData?.result.properties.name;

  return (
    <Container onPress={onPress}>
      <CardAlignment>
        <CardField>Name: </CardField>
        <CardTitle>{character.name}</CardTitle>
      </CardAlignment>

      <CardAlignment>
        <CardField>Home World: </CardField>
        {characterHomeWorldName ? (
          <CardTitle> {characterHomeWorldName}</CardTitle>
        ) : (
          <BabyYodaAnimation />
          // <ActivityIndicator style={{marginTop: 8}} size="large" />
        )}
      </CardAlignment>
    </Container>
  );
}

export default memo(Card, (prevState, nextState) => {
  return Object.is(prevState, nextState);
});
