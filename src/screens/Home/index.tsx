import React, {useCallback} from 'react';
import {View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {Container, ScrollViewWrapper, Header} from './styles';
import {StatusBar} from '../../components/StatusBar';

export const Home: React.FC = () => {
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
      <Header />
      <ScrollViewWrapper onScroll={handleStatusBar} />
    </Container>
  );
};
