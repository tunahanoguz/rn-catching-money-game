import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

function ScreenContainer({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default ScreenContainer;
