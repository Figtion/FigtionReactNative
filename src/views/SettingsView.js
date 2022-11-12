import CustomWebView from './CustomWebView';

const TEST_URL = 'http://3.212.51.44:3000/';
// const URL = 'https://figtion.com:3000';

function SettingsView({url}) {
  const onMessage = message => {
    console.log('action result coming from the webview: ', message);
  };

  return <CustomWebView uri={`${TEST_URL}/settings`} onMessage={onMessage} />;
}

export default SettingsView;
