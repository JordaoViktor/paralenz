import React, {memo} from 'react';
import {useFetch} from '../../services/hooks/useFetch';

import {
  Container,
  CardAlignment,
  CardTitle,
  CardField,
  BabyYodaAnimation,
} from './styles';

import {CharactersListDTO} from '../../services/dtos/CharactersListDTO';
import {CharactersHomeWorldDTO} from '../../services/dtos/CharactersHomeWorldDTO';

interface Props {
  character: CharactersListDTO;
  onPress: () => void;
}

function Card({character, onPress}: Props) {
  const {data: userData} = useFetch(character.url);

  const characterHomeWorldUrl = userData?.result.properties.homeworld;

  const {data: userInfo} = useFetch<CharactersHomeWorldDTO>(
    characterHomeWorldUrl,
  );
  const planet = userInfo?.result.properties.name;

  return (
    <Container onPress={onPress}>
      <CardAlignment>
        <CardField>Name: </CardField>
        <CardTitle>{character.name}</CardTitle>
      </CardAlignment>

      <CardAlignment>
        <CardField>Home World: </CardField>
        {planet ? <CardTitle>{planet}</CardTitle> : <BabyYodaAnimation />}
      </CardAlignment>
    </Container>
  );
}

export default memo(Card, (prevState, nextState) => {
  return Object.is(prevState, nextState);
});
