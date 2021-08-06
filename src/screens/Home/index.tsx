import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/stack.routes';

import {
  Container,
  CharactersListWrapper,
  Header,
  HeaderImageWrapper,
  HeaderImage,
  HeaderTitleWrapper,
  HeaderTitle,
  LoadingWrapper,
  BabyYodaAnimation,
} from './styles';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';

import StarWarsLogo from '../../assets/images/starwars.png';

import Card from '../../components/Card';

interface Props extends CharactersDTO {
  data?: {
    count: number;
    next: string;
    previous: null | string;
  };
  results?: [];
}

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC = ({route}) => {
  const navigation = useNavigation<HomeScreenProp>();
  const paramsList = route.params.results;

  const sortedByName = paramsList.sort((a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();

    return x < y ? -1 : x > y ? 1 : 0;
  });

  const filterValues = (cardNumber: number) =>
    sortedByName.filter((item, index) => {
      if (index <= cardNumber - 1) {
        return item;
      }
    });

  const filtered = filterValues(5);
  const [charactersList, setCharactersList] = useState(filtered);

  function handleScrollCard() {
    const cardsPerScroll = 10;
    const value = filterValues(charactersList.length + cardsPerScroll);

    setCharactersList(prevState => [
      ...prevState.filter(item => item === charactersList),
      ...value,
    ]);
  }

  function handleCardPress(param: CharactersDTO) {
    navigation.navigate('CharacterDetail', param);
  }

  return (
    <Container>
      <Header>
        <HeaderImageWrapper>
          <HeaderImage source={StarWarsLogo} />
        </HeaderImageWrapper>

        <HeaderTitleWrapper>
          <HeaderTitle>Characters</HeaderTitle>
        </HeaderTitleWrapper>
      </Header>

      {!route.params.results ? (
        <LoadingWrapper>
          <BabyYodaAnimation />
        </LoadingWrapper>
      ) : (
        <CharactersListWrapper
          data={charactersList}
          keyExtractor={(item, key) => String(key)}
          renderItem={({item}) => (
            <Card character={item} onPress={() => handleCardPress(item)} />
          )}
          onEndReached={() => handleScrollCard()}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.5}
        />
      )}
    </Container>
  );
};
