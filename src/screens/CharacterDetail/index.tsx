import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  IconWrapper,
  BadgeWrapper,
  Badge,
  BadgeText,
  Footer,
  FooterWrapper,
  FooterFieldWrapper,
  FooterFieldText,
  FooterFieldCharacterDetail,
} from './styles';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';

import {BigHead} from 'react-native-bigheads';

interface Params extends CharactersDTO {
  params: () => void;
}

export const CharacterDetail: React.FC = () => {
  const {params} = useRoute();
  const character = params as Params;
  const navigation = useNavigation();
  // console.log('params:', params);

  function handlePreviousPage() {
    navigation.goBack();
  }
  return (
    <TouchableWithoutFeedback onPress={() => handlePreviousPage()}>
      <Container>
        <Header>
          <IconWrapper>
            <BigHead
              bgColor="yellow"
              bgShape="circle"
              showBackground
              size={400}
            />
          </IconWrapper>
          <BadgeWrapper>
            <Badge>
              <BadgeText>{character.name}</BadgeText>
            </Badge>
          </BadgeWrapper>
        </Header>
        <Footer>
          <FooterWrapper>
            <FooterFieldWrapper>
              <FooterFieldText>Gender: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {character.gender}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Eye color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {character.eye_color}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Skin color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {character.skin_color}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Hair color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {character.hair_color}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>
          </FooterWrapper>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};
