import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function HomeButtonContainer({ children }) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

export default HomeButtonContainer;
