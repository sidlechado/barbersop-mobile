import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Product({ data }) {
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatar/50/${data.name}.png`,
          }}
        />
        <Info>
          <Name>{data.name}</Name>
          <Time>{data.description}</Time>
          <Time>{data.price}</Time>
        </Info>
      </Left>
    </Container>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
