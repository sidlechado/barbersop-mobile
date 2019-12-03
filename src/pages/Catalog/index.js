import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Product from '~/components/Product';

import { Container, List } from './styles';

function Catalog({ isFocused }) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('');

    setProducts(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadProducts();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Product data={item} />}
        />
      </Container>
    </Background>
  );
}

Catalog.navigationOptions = () => ({
  title: 'Catalog',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
});

Catalog.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Catalog);
