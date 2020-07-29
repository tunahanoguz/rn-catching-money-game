import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import 'react-native-gesture-handler';

function App() {
  return (
      <View style={styles.container}>
        <Text>Catching Money Game</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
