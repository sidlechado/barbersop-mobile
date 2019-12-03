import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import RetractInput from '~/components/RetractInput';

import { Container, Title } from './styles';

function About() {
  return (
    <Background>
      <Container>
        <Title>About</Title>
        <RetractInput label="teste" content="teste2" />
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
