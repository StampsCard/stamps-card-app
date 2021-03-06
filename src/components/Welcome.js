import React from 'react';
import { Container } from 'native-base';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { SimpleHeader } from './common';
import { goToMainPage } from '../actions';

class Welcome extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.goToMainPage(this.props.userLogged, this.props.profile.id);
    }, 1500);
  }

  render() {
    const { containerStyle, textStyle, headerStyle, imageStyle } = styles;
    return (
        <Container style={containerStyle}>
          <SimpleHeader style={headerStyle} />
          <Image
            style={imageStyle}
            source={this.props.profile.imageSrc}
          />
          <Text style={textStyle}>Welcome, {this.props.user.firstName} {this.props.user.lastName}</Text>
        </Container>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#EA5442',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  headerStyle: {
    marginBottom: 40
  },
  textStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  imageStyle: {
    height: 200,
    width: 200,
    resizeMode: 'cover'
  }
};

const mapValueToProps = state => {
  return {
    user: state.auth.user,
    profile: state.profile
  };
};

export default connect(mapValueToProps, { goToMainPage })(Welcome);
