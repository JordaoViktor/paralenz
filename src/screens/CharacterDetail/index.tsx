import React, {useContext, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useFetch} from '../../services/hooks/useFetch';
import {TouchableWithoutFeedback} from 'react-native';

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
  BabyYodaAnimation,
} from './styles';

import {CharacterInformationContext} from '../../context/CharacterInformation';

import {CharactersDTO} from '../../services/dtos/CharactersDTO';
import {CharactersHomeWorldDTO} from '../../services/dtos/CharactersHomeWorldDTO';

import {BigHead} from 'react-native-bigheads';

interface Params extends CharactersDTO {
  params: () => void;
  url: string;
  name: string;
}

interface ContextProps {
  setCharacterFullInfo: (userInfo: CharactersHomeWorldDTO) => void;
  characterFullInfo: CharactersDTO;
}

export const CharacterDetail: React.FC = () => {
  const {params} = useRoute();
  const character = params as Params;
  const navigation = useNavigation();

  const {data: userInfo} = useFetch<CharactersHomeWorldDTO>(character.url);

  const {setCharacterFullInfo, characterFullInfo} = useContext<ContextProps>(
    CharacterInformationContext,
  );
  const personage = characterFullInfo?.result?.properties;

  function SetContext() {
    if (userInfo) {
      setCharacterFullInfo(userInfo);
    }
  }

  function handlePreviousPage() {
    navigation.goBack();
  }

  useEffect(() => {
    SetContext();
  });

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
                {personage ? personage?.gender : <BabyYodaAnimation />}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Eye color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {personage ? personage?.eye_color : <BabyYodaAnimation />}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Skin color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {personage ? personage?.skin_color : <BabyYodaAnimation />}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>

            <FooterFieldWrapper>
              <FooterFieldText>Hair color: </FooterFieldText>
              <FooterFieldCharacterDetail>
                {personage ? personage?.hair_color : <BabyYodaAnimation />}
              </FooterFieldCharacterDetail>
            </FooterFieldWrapper>
          </FooterWrapper>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
};
