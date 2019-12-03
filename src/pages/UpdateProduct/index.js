import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

function UpdateProduct({ navigation }) {
  const item = navigation.getParam('item');

  const priceRef = useRef();
  const descriptionRef = useRef();

  const [id] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);

  async function handleSubmit() {
    Alert.alert(
      'Careful',
      'Do you want to update your product?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            await api.put('products', {
              id,
              name,
              price,
              description,
            });

            navigation.navigate('Products');
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
          <FormInput
            icon="person-outline"
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => priceRef.current.focus()}
          />
          <FormInput
            icon="description"
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            autoCorrect={false}
            autoCapitalize="none"
            ref={priceRef}
            returnKeyType="next"
            onSubmitEditing={() => descriptionRef.current.focus()}
          />
          <FormInput
            icon="description"
            placeholder="Description"
            multiline={true}
            value={description}
            onChangeText={setDescription}
            ref={descriptionRef}
            returnKeyType="next"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Update Product</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

UpdateProduct.navigationOptions = ({ navigation }) => ({
  title: 'Update your product',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Products');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
});

UpdateProduct.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default UpdateProduct;
