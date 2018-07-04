import React from 'react';
import { Container, Content, Form } from 'native-base';
import { connect } from 'react-redux';

import {
  productConceptChanged,
  amountChanged,
  generateQrCode,
  generateQrCodeFailed,
  generateQrCodeSuccess
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

  onProductConceptChange() {

  }

  onAmountChange() {

  }

  onButtonPress() {

  }

  renderToast() {

  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Generate QR Code
      </Button>
    );
  }

  render() {
    const { formStyle } = styles;

    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <Title>Register a purchase</Title>
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
        </Content>
      </Container>
    );
  }
}

const styles = {
  formStyle: {
    margin: 20
  }
};

const mapStateToProps = state => {
  return {
    amount: state.registerPurchase.amount,
    productConcept: state.registerPurchase.productConcept,
    error: state.registerPurchase.error,
    loading: state.registerPurchase.loading
  };
};

export default connect(mapStateToProps, {
  productConceptChanged,
  amountChanged,
  generateQrCode,
  generateQrCodeFailed,
  generateQrCodeSuccess
})(RegisterPurchase);
