import React, {useState, ReactNode, useContext} from 'react';
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

import {CharactersListDTO} from '../../services/dtos/CharactersListDTO';
import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import StarWarsLogo from '../../assets/images/starwars.png';

import {CharacterInformationContext} from '../../context/CharacterInformation';

import Card from '../../components/Card';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const Home: ReactNode = ({route}: any) => {
  const navigation = useNavigation<HomeScreenProp>();

  const {globalTheme, setGlobalTheme} = useContext(CharacterInformationContext);

  const paramsList = route.params.results;

  const sortedByName = paramsList.sort((a: any, b: any) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();

    return x < y ? -1 : x > y ? 1 : 0;
  });

  const filterValues = (cardNumber: number) =>
    sortedByName.filter((item: number, index: number) => {
      if (index <= cardNumber - 1) {
        return item;
      }
    });

  const filtered = filterValues(5);

  const [charactersList, setCharactersList] =
    useState<CharactersListDTO[]>(filtered);

  function handleScrollCard() {
    const cardsPerScroll = 10;
    const value = filterValues(charactersList.length + cardsPerScroll);

    setCharactersList(prevState => [
      ...prevState.filter(
        item => !charactersList.some(uid => uid.uid === item.uid),
      ),
      ...value,
    ]);
  }

  function handleCardPress(param: CharactersDTO | any) {
    navigation.navigate('CharacterDetail', param);
  }

  function handleThemeSwitch() {
    setGlobalTheme(!globalTheme);
  }

  return (
    <Container>
      <Header>
        <HeaderImageWrapper onPress={() => handleThemeSwitch()}>
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
