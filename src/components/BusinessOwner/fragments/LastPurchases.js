import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchLastPurchases } from '../../../actions';
import LastPurchaseItem from './items/LastPurchaseItem';

class LastPurchases extends React.Component {

  componentWillMount() {
    this.props.fetchLastPurchases(this.props.user.id);
  }

  render() {
    return (
      <FlatList
        style={styles.listStyle}
        data={this.props.lastPurchases}
        renderItem={(purchase) => <LastPurchaseItem purchase={purchase} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { lastPurchases: state.businessOwner.lastPurchases };
};

const styles = {
  listStyle: {
    width: '100%'
  }
};

export default connect(mapStateToProps, { fetchLastPurchases })(LastPurchases);
