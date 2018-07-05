import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Container, Content, Text } from 'native-base';
import { BackgroundImage, SimpleHeader, NavBar, Button } from '../common';
import { fetchStampsInfo } from '../../actions';

class PurchaseFinished extends React.Component {

  componentWillMount() {
    this.props.fetchStampsInfo(this.props.user.id);
  }

  myStampCards() {
    Actions.myStampCards({ user: this.props.user });
  }

  scanPurchase() {
    // Actions.scanPurchase();
  }

  render() {
    const { contentStyle, h2Style, h3Style, boldStyle, buttonStyle } = styles;
    const stampsInfo = this.props.stampsInfo;
    const stamps = stampsInfo ? (stampsInfo.totalStamps - stampsInfo.stamps) : 0;
    return (
      <Container>
        <NavBar />
        <BackgroundImage />
        <SimpleHeader />
        <Content style={contentStyle}>
          <Text style={h2Style}>
            The payment has been completed with success!
          </Text>
          <Text style={h3Style}>
            You need <Text style={boldStyle}>
                {stamps}
              </Text> stamps
            more to get: <Text style={boldStyle}>
                  {stampsInfo ? stampsInfo.discount : ''}
              </Text>
          </Text>

          <Button style={buttonStyle} onPress={this.myStampCards.bind(this)}>
            Go to My stamps
          </Button>

          <Button style={buttonStyle} onPress={this.scanPurchase.bind(this)}>
            Scan another purchase
          </Button>

        </Content>
      </Container>
    );
  }
}

const styles = {
  contentStyle: {
      flex: 1,
      flexDirection: 'column',
      padding: 15
  },

  h2Style: {
    color: '#80ADD3',
    fontSize: 22
  },

  h3Style: {
    color: '#EA5442',
    fontSize: 15,
    marginBottom: 20
  },

  boldText: {
    fontWeight: 'bold'
  },

  buttonStyle: {
    marginVertical: 5
  }
};

const mapStateToProps = (state) => {
  return {
    stampsInfo: state.purchaseFinished.stampsInfo
  };
};

export default connect(
  mapStateToProps, { fetchStampsInfo }
)(PurchaseFinished);
