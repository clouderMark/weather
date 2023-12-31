import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text>pen up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
