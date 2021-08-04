import React, {useCallback, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {mock} from './mock';
import {
  Container,
  ScrollViewWrapper,
  Header,
  HeaderImageWrapper,
  HeaderImage,
  HeaderTitleWrapper,
  HeaderTitle,
} from './styles';

import StarWarsLogo from '../../assets/starwars.png';

import {StatusBar} from '../../components/StatusBar';

export const Home: React.FC = () => {
  const [charactersList, setCharactersList] = useState<CharactersDTO[]>(mock);

  const statusBar = useSharedValue(0);
  const statusAnimation = useAnimatedStyle(() => ({
    height: interpolate(statusBar.value, [0, 50], [0, 50], Extrapolate.CLAMP),
  }));

  const handleStatusBar = useCallback(
    event => {
      statusBar.value = event.nativeEvent.contentOffset.y;
    },
    [statusBar],
  );

  return (
    <Container>
      <Animated.View style={statusAnimation}>
        <StatusBar />
      </Animated.View>

      <Header>
        <HeaderImageWrapper>
          <HeaderImage source={StarWarsLogo} />
        </HeaderImageWrapper>

        <HeaderTitleWrapper>
          <HeaderTitle>Characters</HeaderTitle>
        </HeaderTitleWrapper>
      </Header>

      <ScrollViewWrapper onScroll={handleStatusBar}>
        {/* <StarWarsCard data={charactersList} /> */}
      </ScrollViewWrapper>
    </Container>
  );
};
