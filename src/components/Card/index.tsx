import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import {useFetch} from '../../services/hooks/useFetch';

import {Container, CardAlignment, CardTitle, CardField} from './styles';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {CharactersHomeWorldDTO} from '../../services/dtos/CharactersHomeWorldDTO';

interface Props {
  character: CharactersDTO;
  onPress: () => void;
}

function Card({character, onPress}: Props) {
  const characterWorld = character.homeworld;

  const {data} = useFetch<CharactersHomeWorldDTO>(characterWorld);

  return (
    <Container onPress={onPress}>
      <CardAlignment>
        <CardField>Name: </CardField>
        <CardTitle>{character.name}</CardTitle>
      </CardAlignment>

      <CardAlignment>
        {!data ? (
          <ActivityIndicator style={{marginTop: 17}} size="large" />
        ) : (
          <>
            <CardField>Home world: </CardField>
            <CardTitle>{data.name}</CardTitle>
          </>
        )}
      </CardAlignment>
    </Container>
  );
}

export default memo(Card, (prevState, nextState) => {
  return Object.is(prevState, nextState);
});
