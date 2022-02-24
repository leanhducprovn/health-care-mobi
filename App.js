import React from 'react';
import { StyleSheet } from 'react-native'
import { WebView, WebViewNavigation } from 'react-native-webview';

export default function App() {
  return (
      <WebView
        style = {styles.container}
        source = {require("./index.html")}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
