import React from 'react';
import { Text, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanPurchase extends React.Component {

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress.bind(this)
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onSuccess(e) {
    this.handleURL(e.data);
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  handleBackPress() {
    return Actions.pop();
  }

  handleURL(scannedUrl) {
    const scheme = 'stampscard://customer/codeScanned/';
    if (scannedUrl.indexOf(scheme) === 0) {
        const purchaseId = scannedUrl.slice(scheme.length);
        Actions.confirmPurchase({ purchaseId });
    } else {
      console.log('Error! This QR Code is not internal', scannedUrl);
    }
  }

  render() {
      return (
        <QRCodeScanner
          showMarker
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.boxContent}>
              Use the camera to scan the QR Code from a purchase
            </Text>
          }
        />
      );
  }
}

const styles = {
  boxContent: {
    flex: 1,
    fontSize: 22,
    justifyContent: 'center',
    backgroundColor: '#EA5442',
    padding: 20,
    fontWeight: 'bold'
  },
};

export default ScanPurchase;
