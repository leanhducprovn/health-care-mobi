import React from "react";
import { StyleSheet } from "react-native";
import { WebView, WebViewNavigation } from "react-native-webview";
import Cookies from 'universal-cookie';

// Send the cookie information back to the mobile app
const CHECK_COOKIE = `
	ReactNativeWebView.postMessage("Cookie: " + document.cookie);
	true;
`;

const onNavigationStateChange = (navigationState) => {
    // Check cookies every time URL changes
    if (webViewRef.current) {
        webViewRef.current.injectJavaScript(CHECK_COOKIE);
    }
};

const onMessage = async (event) => {
    const { data } = event.nativeEvent;

    if (data.includes("Cookie:")) {
        // process the cookies
        const storedCookies = await CookieManager.get("http://localhost:3000/auth", true);
    }
};

export default function App() {
    return <WebView style={styles.container} source={require("./index.html")} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
