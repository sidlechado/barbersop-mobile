import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';

import { Container, Title, ContainerAbout } from './styles';

function About() {
  return (
    <Background>
      <Container>
        <Title>About</Title>

        <ContainerAbout>
          <Icon name="info" size={80} />
        </ContainerAbout>
      </Container>
    </Background>
  );
}

About.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="info" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(About);
