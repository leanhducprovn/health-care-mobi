import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style = {styles.container}>
      <WebView
        userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        originWhitelist = {["https://*", "http://*", "file://*", "sms://*"]}
        source = {require("./index.html")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
