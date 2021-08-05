import React from 'react';
import {useFetch} from '../../services/hooks/useFetch';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
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

export const Home: React.FC = () => {
  const query = 'people?ordering=name';
  const {data, error, isLoading} = useFetch<Props>(query);
  const navigation = useNavigation<HomeScreenProp>();

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
          <BabyYodaAnimation />
        </LoadingWrapper>
      ) : (
        <>
          {error ? (
            <View>
              <Text>Hello error</Text>
            </View>
          ) : (
            <CharactersListWrapper
              data={data.results}
              keyExtractor={(item, key) => String(key)}
              renderItem={({item}) => (
                <Card character={item} onPress={() => handleCardPress(item)} />
              )}
            />
          )}
        </>
      )}
    </Container>
  );
};
