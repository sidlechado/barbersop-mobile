import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Title, AboutTextH1, AboutTextH2, Bold } from './styles';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  changeExpanded() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <Background>
        <Container>
          <Title>About</Title>
          <AboutTextH1>Services n products</AboutTextH1>
          <Container style={{ width: 300, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => this.changeExpanded()}>
              <Text style={isExpanded ? styles.open : styles.closed}>
                Services n products is a APP developed with to make the users
                life easier when making appointments and selling products. You
                won't have to look up Providers cellphone on google or any other
                platform, you just have to create an appointment and go to the
                location at the time, and if you have any products you may want
                to sell, you just have to register it on the app and wait for
                people to contact you about it :) {'\n'}If you have any doubts
                about the system, or have any feedback you can contact us
                through github or facebook on the following links:
                {'\n'}
                <Bold>github: github.com/sidlechado</Bold>
                {'\n'}
                <Bold>facebook: facebook.com/sid.lechado</Bold>
                {'\n'}
              </Text>
              {!isExpanded && <AboutTextH2>More...</AboutTextH2>}
            </TouchableOpacity>
          </Container>
        </Container>
      </Background>
    );
  }
}

About.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="info" size={20} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  open: {
    flexGrow: 1,
    color: '#fff',
    textAlign: 'justify',
  },
  closed: {
    maxHeight: 30,
    color: '#fff',
    textAlign: 'justify',
  },
});

export default About;
