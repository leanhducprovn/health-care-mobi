import { View, StyleSheet, AppRegistry } from 'react-native'
import { WebView } from 'react-native-webview'; 


export default function App() {
  return (
    <View style = {styles.container}>
      <WebView source = {require("./index.html")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
