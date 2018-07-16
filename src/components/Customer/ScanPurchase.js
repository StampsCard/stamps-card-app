import React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanPurchase extends React.Component {

  onSuccess(e) {
    this.handleURL(e.data);
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  handleURL(scannedUrl) {
    const scheme = 'stampscard://customer/codeScanned/';
    if (scannedUrl.indexOf(scheme) === 0) {
        const purchaseId = scannedUrl.slice(scheme.length);
        console.log(purchaseId);
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
            <Text style={styles.centerText}>
              Use the camera to scan the QR Code from a purchase
            </Text>
          }
        />
      );
  }
}

const styles = {
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32
  },
  buttonText: {
    fontSize: 21,
    color: '#80ADD3',
    fontWeight: 'bold'
  },
  buttonTouchable: {
    padding: 16,
  },
};

export default ScanPurchase;
