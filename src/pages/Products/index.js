import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Product from '~/components/Product';

import { Container, List, CreateButton, Form, Update } from './styles';

function Products({ isFocused, navigation }) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('ownproducts');

    setProducts(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadProducts();
    }
  }, [isFocused]);

  async function handleDeleteProducts(id) {
    Alert.alert(
      'Careful',
      'Do you want to delete your product?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await api.delete(`products/${id}`);

            setProducts(
              products.map(product =>
                product.id === id ? { ...product } : product
              )
            );

            loadProducts();
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Background>
      <Container>
        <Form>
          <CreateButton onPress={() => navigation.navigate('NewProduct')}>
            New product
          </CreateButton>
        </Form>

        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <Product
                data={item}
                onCancel={() => handleDeleteProducts(item.id)}
              />
              <Update
                onPress={() => navigation.navigate('UpdateProduct', { item })}
              >
                Update product above
              </Update>
            </>
          )}
        />
      </Container>
    </Background>
  );
}

Products.navigationOptions = ({ navigation }) => ({
  title: 'Products',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
});

Products.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Products);
