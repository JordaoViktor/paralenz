import React from 'react';
import {View} from 'react-native';
import {useFetch} from '../../services/hooks/useFetch';
import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  CharactersListWrapper,
  Header,
  HeaderImageWrapper,
  HeaderImage,
  HeaderTitleWrapper,
  HeaderTitle,
} from './styles';

import StarWarsLogo from '../../assets/starwars.png';

import {StatusBar} from '../../components/StatusBar';
import Card from '../../components/Card';

interface Props {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }[];
}

export const Home: React.FC = () => {
  const luke = 'people?ordering=name';
  const {data, error, isLoading} = useFetch<Props>(luke);
  const navigation = useNavigation();
  // const [charactersList, setCharactersList] = useState<CharactersDTO[]>([data]);
  // if (!data) {
  //   <View style={{width: 300, height: 300, backgroundColor: 'red'}} />;
  // }

  function handleCardPress(param: any) {
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
        <View style={{width: 300, height: 300, backgroundColor: 'green'}} />
      ) : (
        <CharactersListWrapper
          data={data.results}
          keyExtractor={(item, key) => String(key)}
          renderItem={({item}) => (
            <Card data={item} onPress={() => handleCardPress(item)} />
          )}
        />
      )}
    </Container>
  );
};
