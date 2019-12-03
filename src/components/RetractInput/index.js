import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import styles from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class LongText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  componentDidUpdate(pevProps, prevState) {
    LayoutAnimation.spring();
  }

  changeIsExpanded() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    });
  }

  render() {
    const { label = '', content = '-' } = this.props;
    const { isExpanded } = this.state;

    return (
      <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{label}</Text>

        <TouchableWithoutFeedback onPress={() => this.changeIsExpanded()}>
          <View>
            <Text
              style={[
                styles.cell,
                styles.content,
                isExpanded ? styles.expanded : styles.collapsed,
              ]}
            >
              {content}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
