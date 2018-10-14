import React from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Toast } from 'native-base';
import { emailChanged, passwordChanged, loginUser, changeBackground } from '../actions';
import {
  FormInput,
  Button,
  Spinner,
  BackgroundImage,
  SimpleHeader,
  FormItem
} from './common';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

  componentWillMount() {
    this.props.changeBackground();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
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
      >
        LOGIN
      </Button>
    );
  }

    render() {
      const { formStyle } = styles;
        return (
            <Container>
                <BackgroundImage image={this.props.background} />
                <SimpleHeader />
                <Content>
                    <Form style={formStyle}>
                        <FormItem>
                            <FormInput
                                label="Email"
                                placeholder="example@email.com"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                            />
                        </FormItem>

                        <FormItem>
                            <FormInput
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
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
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    background: state.common.background
  };
};

const styles = {
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  },

  containerStyle: {
      alignItems: 'center',
      width: '100%'
  },

  backgroundImageStyle: {
      width: '100%',
      height: '100%',
      position: 'absolute'
  },

  formStyle: {
      marginHorizontal: '10%',
  }
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
    changeBackground
 }
)(LoginForm);
