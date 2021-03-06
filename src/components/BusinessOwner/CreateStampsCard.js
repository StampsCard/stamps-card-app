import React from 'react';
import { Keyboard, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Container, Content, Form, Toast } from 'native-base';
import {
  NavBar,
  BackgroundImage,
  InputWithLabel,
  Button,
  Spinner,
  FormItem
} from '../common';
import {
  createStampsCard,
  stampPriceChanged,
  totalStampsChanged,
  discountChanged
} from '../../actions';
import { BUSINESS_OWNER } from '../../values/Profiles';

class CreateStampsCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
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

  onStampPriceChange(value) {
    this.props.stampPriceChanged(value);
  }

  onTotalStampsChange(value) {
    this.props.totalStampsChanged(value);
  }

  onButtonPress() {
    const { businessId, stampPrice, totalStamps, discount } = this.props;
    Keyboard.dismiss();
    this.props.createStampsCard(
      businessId,
      stampPrice,
      totalStamps,
      discount
    );
  }

  onDiscountChange(value) {
    this.props.discountChanged(value);
  }

  handleBackPress() {
    return Actions.pop();
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
        onPress={this.onButtonPress.bind(this)}
        style={styles.buttonStyle}
      >
        CREATE
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <NavBar
          navigation={this.props.navigation}
          profile={BUSINESS_OWNER}
          title="Create Stamps Card"
        >
          <BackgroundImage image={this.props.background} />
          <Content padder>
            <Form>
                  <InputWithLabel
                      label="Stamp price (€)"
                      placeholder="10"
                      onChangeText={this.onStampPriceChange.bind(this)}
                      value={this.props.stampPrice}
                  />

                  <InputWithLabel
                      label="Total of stamps"
                      placeholder="50"
                      onChangeText={this.onTotalStampsChange.bind(this)}
                      value={this.props.totalStamps}
                  />

                  <InputWithLabel
                      label="Discount"
                      placeholder="A bottle of whisky"
                      onChangeText={this.onDiscountChange.bind(this)}
                      value={this.props.discount}
                  />
              <FormItem>
                { this.renderButton() }
              </FormItem>

              { this.renderToast() }
            </Form>
          </Content>
        </NavBar>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    background: state.common.background,
    businessId: state.profile.businessId,
    stampPrice: state.businessOwner.stampPrice,
    totalStamps: state.businessOwner.totalStamps,
    discount: state.businessOwner.discount
  };
};

const styles = {
  buttonStyle: {
    marginTop: 5
  }
};

export default connect(mapStateToProps, {
  createStampsCard,
  stampPriceChanged,
  totalStampsChanged,
  discountChanged
})(CreateStampsCard);
