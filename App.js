import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'; 


export default function App() {
  return (
    <View style = {styles.container}>
      <WebView source = {require("./index.html")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
