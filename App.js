import { WebView } from 'react-native-webview'; 


export default function App() {
  return (
    <WebView source={{ html: "<iFrame src='https://project.thanglongit.vn/' />" }} />
  );
}

