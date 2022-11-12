import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import CustomWebView from './CustomWebView';

let TEST_URL = 'http://3.212.51.44:3000/';
const URL = 'https://figtion.com:3000';

function AuthenticationView() {
  const [nfcReader, updateNfc] = useState(false);

  useEffect(() => {
    startNfc();

    () => NfcManager.cancelTechnologyRequest(); // unmount the scanner on navigate away.
  }, [nfcReader]);

  const startNfc = async () => {
    try {
      const supported = await NfcManager.isSupported();
      const nfcScanning = await NfcManager.isEnabled();
      console.log('starting Nfc........');
      console.log('supported', supported);
      console.log('nfcScanning', nfcScanning);

      if (supported && nfcScanning) {
        await NfcManager.start();
        let tag;
        let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;

        await NfcManager.requestTechnology(tech);
        tag = await NfcManager.getTag();
        console.warn('Tag found', tag);
        if (tag) {
          // tag.ndefStatus = await NfcManager.ndefHandler.getNdefStatus();
          console.warn('Tag found-2', tag);
          // const decodedData = Ndef.uri.decodePayload(
          //   tag.ndefMessage[0].payload,
          // );
          const decodedData = Ndef.uri.decodePayload(
            tag.ndefMessage[0].payload,
          );

          console.log(
            'testing decodedData',
            decodedData,
            decodedData.replace('https://www.zh', ''),
          );

          TEST_URL = `http://10.0.2.254:3000/claim?figureId=${decodedData.replace(
            'https://www.zh',
            '',
          )}`;
          //Some logic here...
        }
        NfcManager.cancelTechnologyRequest(); // Have to reset nfc scanner.
        updateNfc(!nfcReader); // toggle a reset nfc scanner use effect hook.
      }
    } catch (error) {
      NfcManager.cancelTechnologyRequest();
      updateNfc(!nfcReader);
    }
  };

  const onMessage = async message => {
    console.log('action result coming from the webview: ', message);

    switch (message.nativeEvent.data) {
      case 'start-auth':
        try {
          await startNfc();
        } catch (ex) {
          console.error('Oops!', ex);
        } finally {
          // stop the nfc scanning
          //   NfcManager.cancelTechnologyRequest();
        }
        break;
      default:
        break;
    }
  };

  return <CustomWebView uri={TEST_URL} onMessage={onMessage} />;
}

export default AuthenticationView;
