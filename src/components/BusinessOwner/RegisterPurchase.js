import React from 'react';
import { Container, Content, Form, Toast } from 'native-base';
import { connect } from 'react-redux';
import { View, Keyboard, Alert } from 'react-native';
import QRCode from 'react-native-qrcode';
import { BUSINESS_OWNER } from '../../values/Profiles';

import {
  productConceptChanged,
  amountChanged,
  generatePurchase,
  purchaseGenerationFailed,
  purchaseGenerated,
  cancelPurchase,
  changeBackground,
  generateAnotherPurchase
} from '../../actions';
import {
  NavBar,
  BackgroundImage,
  InputWithLabel,
  FormItem,
  Spinner,
  Button
} from '../common';

class RegisterPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  componentWillMount() {
    this.props.changeBackground();
  }

  onProductConceptChange(text) {
    this.props.productConceptChanged(text);
  }

  onAmountChange(text) {
    this.props.amountChanged(text);
  }

  generatePurchase() {
    Keyboard.dismiss();
    this.props.generatePurchase({
      businessId: this.props.businessId,
      concept: this.props.concept,
      amount: this.props.amount
    });
  }

  cancelPurchase() {
    return Alert.alert(
      'Cancel purchase',
      'Are you sure do you want to cancel this purchase?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.props.cancelPurchase(this.props.purchaseId) },
      ]
    );
  }

  generateAnotherPurchase() {
    this.props.generateAnotherPurchase();
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

  renderToast() {
    if (this.props.error) {
      return Toast.show({
        text: this.props.error,
        buttonText: 'Okay',
        position: 'bottom',
        duration: 5000
      });
    }

    if (this.props.info) {
      Toast.show({
        text: this.props.info,
        buttonText: 'Okay',
        position: 'bottom',
        duration: 5000
      });
    }
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
          onPress={this.generateAnotherPurchase.bind(this)}
          style={styles.cancelPurchaseButton}
        >
          Generate another purchase
        </Button>
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
    if (this.props.link !== null && this.props.error === '') {
      return this.renderQrCode();
    }

    return this.renderForm();
  }

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="Register a purchase"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            { this.renderContent() }
          </Content>
        </NavBar>
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
    concept: state.registerPurchase.concept,
    error: state.registerPurchase.error,
    loading: state.registerPurchase.loading,
    link: state.registerPurchase.link,
    purchaseId: state.registerPurchase.purchaseId,
    background: state.common.background,
    user: state.auth.user,
    businessId: state.profile.businessId,
    info: state.registerPurchase.info
  };
};

export default connect(mapStateToProps, {
  productConceptChanged,
  amountChanged,
  generatePurchase,
  purchaseGenerationFailed,
  purchaseGenerated,
  cancelPurchase,
  changeBackground,
  generateAnotherPurchase
})(RegisterPurchase);
