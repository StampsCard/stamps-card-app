import React from 'react';
import { Container, Content, Form, Toast } from 'native-base';
import { connect } from 'react-redux';
import { View, Keyboard } from 'react-native';
import QRCode from 'react-native-qrcode';

import {
  productConceptChanged,
  amountChanged,
  generatePurchase,
  purchaseGenerationFailed,
  purchaseGenerated,
  cancelPurchase
} from '../../actions';
import {
  NavBar,
  BackgroundImage,
  InputWithLabel,
  FormItem,
  Spinner,
  Button,
  Title
} from '../common';

class RegisterPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  onProductConceptChange(text) {
    this.props.productConceptChanged(text);
  }

  onAmountChange(text) {
    this.props.amountChanged(text);
  }

  generatePurchase() {
    Keyboard.dismiss();
    this.props.generatePurchase(this.props.user);
  }

  cancelPurchase() {
    this.props.cancelPurchase(this.props.purchaseId);
  }

  renderToast() {
    if (this.props.error) {
      Toast.show({
        text: this.props.error,
        buttonText: 'Okay',
        position: 'bottom',
        duration: 5000
      });
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={this.generatePurchase.bind(this)}
      >
        Generate QR Code
      </Button>
    );
  }

  renderForm() {
    const { formStyle } = styles;
    return (
      <Form style={formStyle}>
          <InputWithLabel
            label="Product Concept (optional)"
            onChangeText={this.onProductConceptChange.bind(this)}
          />
          <InputWithLabel
            label="Amount (€)"
            onChangeText={this.onAmountChange.bind(this)}
          />

          <FormItem>
            { this.renderButton() }
          </FormItem>

          { this.renderToast() }

      </Form>
    );
  }

  renderQrCode() {
    return (
      <View style={styles.qrCodeContent}>
        <QRCode
            value={this.props.link}
            size={300}
            bgColor='black'
            fgColor='white'
        />
        <Button
          onPress={this.cancelPurchase.bind(this)}
          style={styles.cancelPurchaseButton}
        >
          Cancel Purchase
        </Button>
      </View>

    );
  }

  renderContent() {
    if (this.props.link) {
      return this.renderQrCode();
    }

    return this.renderForm();
  }

  render() {
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>Register a purchase</Title>
          { this.renderContent() }
        </Content>
      </Container>
    );
  }
}

const styles = {
  formStyle: {
    margin: 20
  },
  qrCodeContent: {
    width: '100%',
    alignItems: 'center'
  },
  cancelPurchaseButton: {
    marginTop: 15
  }
};

const mapStateToProps = state => {
  return {
    amount: state.registerPurchase.amount,
    productConcept: state.registerPurchase.productConcept,
    error: state.registerPurchase.error,
    loading: state.registerPurchase.loading,
    link: state.registerPurchase.link,
    purchaseId: state.registerPurchase.purchaseId
  };
};

export default connect(mapStateToProps, {
  productConceptChanged,
  amountChanged,
  generatePurchase,
  purchaseGenerationFailed,
  purchaseGenerated,
  cancelPurchase
})(RegisterPurchase);
