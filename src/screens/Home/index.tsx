import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useFetch} from '../../services/hooks/useFetch';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  CharactersListWrapper,
  Header,
  HeaderImageWrapper,
  HeaderImage,
  HeaderTitleWrapper,
  HeaderTitle,
  LoadingWrapper,
} from './styles';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';

import StarWarsLogo from '../../assets/starwars.png';

import Card from '../../components/Card';

interface Props extends CharactersDTO {
  data: {
    count: number;
    next: string;
    previous: null | string;
  };
  results: [];
}

export const Home: React.FC = () => {
  const luke = 'people?ordering=name';
  const {data, isLoading} = useFetch<Props>(luke);
  const navigation = useNavigation();

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

      {isLoading ? (
        <LoadingWrapper>
          <ActivityIndicator size="large" />
        </LoadingWrapper>
      ) : (
        <CharactersListWrapper
          data={data.results}
          keyExtractor={(item, key) => String(key)}
          renderItem={({item}) => (
            <Card character={item} onPress={() => handleCardPress(item)} />
          )}
        />
      )}
    </Container>
  );
};
