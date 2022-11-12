import {WebView} from 'react-native-webview';

const CustomWebView = ({uri, ...props}) => {
  return (
    <WebView
      style={{flex: 1}}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      javaScriptEnabledAndroid={true}
      originWhitelist={['*']}
      onLoadEnd={this.onLoadEnd}
      onError={this.onError}
      mixedContentMode={'never'} // security
      startInLoadingState={true} // when starting this component
      scalesPageToFit
      source={{
        uri: `${uri}`,
      }}
      {...props}
    />
  );
};

export default CustomWebView;
