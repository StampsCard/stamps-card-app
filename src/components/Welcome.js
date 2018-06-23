import React from 'react';
import { Container } from 'native-base';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { SimpleHeader } from './common';
import { goToMainPage } from '../actions';

class Welcome extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.goToMainPage(this.props.user, this.props.profile.id);
    }, 3000);
  }

  render() {
    const { containerStyle, textStyle, headerStyle } = styles;
    return (
        <Container style={containerStyle}>
          <SimpleHeader style={headerStyle} />
          <Text style={textStyle}>{'welcome'.toUpperCase()}</Text>
          <Text style={textStyle}>{'to your'.toUpperCase()}</Text>
          <Text style={textStyle}>{'stamps card'.toUpperCase()}</Text>
          <Text style={textStyle}>{'for'.toUpperCase()}</Text>
          <Text style={textStyle}>{this.props.profile.text.toUpperCase()}</Text>
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
    fontSize: 45,
    fontWeight: 'bold'
  }
};

const mapValueToProps = state => {
  return {
    user: state.profile.user
  };
};

export default connect(mapValueToProps, { goToMainPage })(Welcome);
