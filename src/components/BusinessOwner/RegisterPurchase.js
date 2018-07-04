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
  SimpleHeader,
  FormItem,
  FormInput,
  Spinner,
  Button
} from '../common';

class RegisterPurchase extends React.Component {

  onProductConceptChange() {

  }

  onAmountChange() {

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
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <Content padder>
          <SimpleHeader />
          <Form>
              <FormItem>
                  <FormInput
                      label="Product Concept (optional)"
                      placeholder="example@email.com"
                      onChangeText={this.onProductConceptChange.bind(this)}
                  />
              </FormItem>

              <FormItem>
                  <FormInput
                      label="Amount (€)"
                      placeholder="30"
                      onChangeText={this.onAmountChange.bind(this)}
                  />
              </FormItem>

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
