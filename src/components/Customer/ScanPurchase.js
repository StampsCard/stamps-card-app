import React from 'react';
import { Linking, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanPurchase extends React.Component {

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <QRCodeScanner
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
