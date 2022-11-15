import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Tile from './src/components/Tile';
import Constants from 'expo-constants'

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Tile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
