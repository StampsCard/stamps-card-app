import React from 'react';
import { connect } from 'react-redux';
import { Text, Image } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FormInput, Button, Spinner, Card, CardSection, Logo } from './common';

class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <CardSection>
          <Text style={styles.errorTextStyle}>{ this.props.error }</Text>
        </CardSection>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {

    const { cardStyle, logoStyle, containerLogoStyle, backgroundImageStyle } = styles;

    return (
      <Card style={cardStyle}>
              <CardSection style={containerLogoStyle}>
                  <Image source={require('../../resources/img/stamps_card_logo.png')} style={logoStyle} />
              </CardSection>

              <CardSection>
                  <FormInput
                      label="Email"
                      placeholder="example@email.com"
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                  />
              </CardSection>

              <CardSection>
                  <FormInput
                      secureTextEnty
                      label="Password"
                      placeholder="password"
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                  />
              </CardSection>

            { this.renderError() }

            <CardSection>
              { this.renderButton() }
            </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

const styles = {
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  },

  cardStyle: {
      alignItems: 'center',
      fontFamily: 'Roboto'
  },

  containerLogoStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25
  },

  logoStyle: {
      width: 45,
      height: 45
  },

  backgroundImageStyle: {
      width: '100%',
      height: '100%',
      position: 'absolute'
  }
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
 }
)(LoginForm);
