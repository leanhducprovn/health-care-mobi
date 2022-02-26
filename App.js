import React from "react";
import { StyleSheet } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";

// Send the cookie information back to the mobile app
const CHECK_COOKIE = `
	ReactNativeWebView.postMessage("Cookie: " + document.cookie);
	true;
`;

export default function App() {
	return <WebView style={styles.container} source={require("./index.html")} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
