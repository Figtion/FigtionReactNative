import CustomWebView from './CustomWebView';

const TEST_URL = 'http://3.212.51.44:3000/';
const URL = 'https://figtion.com:3000';

function CollectionView({url}) {
  const onMessage = message => {
    console.log('action result coming from the webview: ', message);
  };

  return <CustomWebView uri={`${TEST_URL}/testsc`} onMessage={onMessage} />;
}

export default CollectionView;
