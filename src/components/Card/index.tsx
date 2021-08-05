import React, {memo} from 'react';
import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {Container, CardWrapper, CardTitle} from './styles';

interface Props {
  data: CharactersDTO;
  onPress: () => void;
}

function Card({data, onPress}: Props) {
  // console.log('identify:', data);

  return (
    <Container onPress={onPress}>
      <CardWrapper>
        <CardTitle>{data.name}</CardTitle>
      </CardWrapper>
      <CardWrapper>
        <CardTitle>{data.homeworld}</CardTitle>
      </CardWrapper>
    </Container>
  );
}

export default memo(Card, (prevState, nextState) => {
  return Object.is(prevState, nextState);
});
