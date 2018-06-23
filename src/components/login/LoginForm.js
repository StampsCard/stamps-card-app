import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Toast } from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import {
  FormInput,
  Button,
  Spinner,
  BackgroundImage,
  SimpleHeader
} from '../common';
import { FormItem } from '.';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

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

  renderToast() {
    if (this.props.error) {
      Toast.show({
        text: this.props.error,
        buttonText: 'Okay',
        position: 'bottom'
      });
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
      const { formStyle } = styles;
        return (
            <Container>
                <BackgroundImage />
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
                                secureTextEnty
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                            />
                        </FormItem>

                        { this.renderToast() }

                        { this.renderButton() }
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
    loading: state.auth.loading
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

  contentStyle: {
      fontFamily: 'Roboto'
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
    loginUser
 }
)(LoginForm);
