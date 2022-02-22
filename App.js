import { WebView } from 'react-native-webview'; 


export default function App() {
  return (
    <WebView source={{ html: `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><style>iframe{width:100%;border:0}::-webkit-scrollbar{display:none}</style><div style='position:fixed;bottom:0;right:0;top:0;left:0;z-index:999;'><iframe height='100%' src='https://project.thanglongit.vn/' width='100%'/></div></body</html>` }} />
  );
}
