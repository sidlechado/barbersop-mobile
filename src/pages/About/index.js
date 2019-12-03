import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Title, List } from './styles';

function About({ isFocused }) {
  return (
    <Background>
      <Container>
        <Title>About</Title>
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

About.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(About);
