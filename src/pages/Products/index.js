import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Title, List } from './styles';

function Products({ isFocused }) {
  return (
    <Background>
      <Container>
        <Title>Products</Title>
      </Container>
    </Background>
  );
}

Products.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="work" size={20} color={tintColor} />
  ),
};

Products.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Products);
