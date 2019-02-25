import React from 'react';
import { Container, Content, Form, Toast, Label, Picker } from 'native-base';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Keyboard, Alert, BackHandler } from 'react-native';
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
  generateAnotherPurchase,
  getAvailableStampsCards,
  stampsCardChanged
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
    this.props.getAvailableStampsCards(this.props.user.id, this.props.businessId);
    this.props.changeBackground();
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress.bind(this)
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onProductConceptChange(text) {
    this.props.productConceptChanged(text);
  }

  onAmountChange(text) {
    this.props.amountChanged(text);
  }

  handleBackPress() {
    return Actions.pop();
  }

  generatePurchase() {
    Keyboard.dismiss();
    this.props.generatePurchase({
      stampsCardIdSelected: this.props.stampsCardIdSelected,
      concept: this.props.concept,
      amount: this.props.amount,
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

  renderStampsCardPickerItem(id, name) {
    return (
      <Picker.Item label={name} key={id} value={id} />
    );
  }

  renderStampsCardPicker() {
    const items = _.map(this.props.availableStampsCards, (stampsCard) => {
      return this.renderStampsCardPickerItem(stampsCard.id, stampsCard.name);
    });

    return (
      <FormItem>
          <Label style={styles.labelStyle}>Stamps card</Label>
          <Picker
            selectedValue={this.props.stampsCardIdSelected}
            onValueChange={(item) => {
              this.props.stampsCardChanged(item);
            }}
            style={styles.pickerStyle}
          >
          {items}
          </Picker>
      </FormItem>
      
    );
  }

  renderForm() {
    const { formStyle } = styles;
    return (
      <Form style={formStyle}>
          { this.renderStampsCardPicker() }
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
          Register another purchase
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
  },
  labelStyle: {
    margin: 3,
    color: '#80ADD3',
    fontWeight: 'bold'
    // placeholderTextColor: '#FFF',
  },
  pickerStyle: {
    backgroundColor: '#80ADD3',
    color: '#fff',
    borderColor: '#80ADD3',
    borderWidth: 2,
    borderRadius: 15,
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
    info: state.registerPurchase.info,
    stampsCardIdSelected: state.registerPurchase.stampsCardIdSelected,
    availableStampsCards: state.registerPurchase.availableStampsCards
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
  generateAnotherPurchase,
  getAvailableStampsCards,
  stampsCardChanged
})(RegisterPurchase);
