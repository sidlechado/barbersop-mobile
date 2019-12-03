import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Profile({ navigation }) {
  const priceRef = useRef();
  const descriptionRef = useRef();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    await api.post('products', {
      name,
      price,
      description,
    });

    navigation.navigate('Products');
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
          <SubmitButton onPress={handleSubmit}>Create Product</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = ({ navigation }) => ({
  title: 'Create a new product',
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

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
