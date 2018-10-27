import React from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Row, Grid } from 'react-native-easy-grid';
import { Item } from 'native-base';
import { STAMP_TYPE, EMPTY_TYPE } from '../../../values/StampCardTypes';
import { ITEMS_PER_ROW, ROW_HEIGHT } from '../../../values/StampCardConfig';
import { expandCard, collapseCard } from '../../../actions';

class TouchableStampCard extends React.Component {

  toggleExpanded() {
    if (this.isCollapsed()) {
      this.props.expandCard(this.props.stampId);
    } else {
      this.props.collapseCard();
    }
  }

  isCollapsed() {
    return this.props.cardExpandedId !== this.props.stampId;
  }

  calculateItemsPerRow(currentRow, numRows, total) {
    if (currentRow === numRows) {
      return total % ITEMS_PER_ROW;
    }

    return ITEMS_PER_ROW;
  }

  renderStampsRow(currentRow, numRows, stamps, types, total) {
    const items = [];
    let i = 0;
    const itemsInThisRow = this.calculateItemsPerRow(
      currentRow,
      numRows,
      total
    );

    const rowId = `${this.props.stampId}-${currentRow}`;

    for (i = 0; i < itemsInThisRow; ++i) {
      const numItem = (currentRow * ITEMS_PER_ROW) + i;
      const itemId = `${this.props.stampId}-${numItem}`;
      items.push(this.renderStamp(types[numItem], itemId));
    }
    stamps.push(
      <Row style={styles.stampRow} key={rowId}>
        {items}
      </Row>
    );
  }

  renderStamp(type, key) {
    const { filledStampStyle, emptyStampStyle, stampImageStyle } = styles;
    if (STAMP_TYPE === type) {
      return (
        <Item style={filledStampStyle} key={key}>
          <Image
            source={require('../../../../resources/img/stamp.png')}
            style={stampImageStyle}
          />
        </Item>
      );
    } else if (EMPTY_TYPE === type) {
      return (<Item style={emptyStampStyle} key={key} />);
    }
  }

  renderStamps(types) {
    const stamps = [];
    let i = 0;
    const total = types.length;
    const numRows = Math.ceil(total / ITEMS_PER_ROW);
    const gridHeight = numRows * ROW_HEIGHT;

    for (i = 0; i < numRows; ++i) {
      stamps.push(this.renderStampsRow(i, numRows, stamps, types, total));
    }

    return (
      <Grid style={{ height: gridHeight }}>
        {stamps}
      </Grid>
    );
  }

  render() {
    const {
      cardContentStyle,
      h2ContentStyle,
      h2Style
    } = styles;

    const isCollapsed = this.isCollapsed();
    return (
      <TouchableOpacity onPress={this.toggleExpanded.bind(this)}>
        <View style={h2ContentStyle}>
          <Text style={h2Style}>{this.props.businessName}</Text>
        </View>
        <Collapsible collapsed={isCollapsed} align="center">
          <View style={cardContentStyle}>
            {this.renderStamps(this.props.stampTypes)}
          </View>
        </Collapsible>
      </TouchableOpacity>
    );
  }
}

const styles = {
  contentStyle: {
    width: '100%',
    alignItems: 'center',
    flex: 1
  },

  boldText: {
    fontWeight: 'bold',
    marginLeft: 2,
    marginRight: 2
  },

  cardContentStyle: {
    backgroundColor: '#5C9CCB',
    borderColor: '#80ADD3',
    borderWidth: 2,
    borderRadius: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    marginVertical: 10,
    shadowColor: '#020202',
    shadowOpacity: 0.7,
    width: 350
  },

  contentContainerItemStyle: {
  },

  emptyStampStyle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 10
  },

  filledStampStyle: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 10
  },

  stampImageStyle: {
    width: 50,
    height: 50
  },

  stampRow: {
    height: 60
  },

  h2Style: {
    color: '#5C9CCB',
    fontSize: 18
  },

  h2ContentStyle: {
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 5,
      height: 5
    },
    marginVertical: 5,
    shadowColor: '#020202',
    shadowOpacity: 0.7,
    borderWidth: 2,
    borderRadius: 15
  }
};

const mapStateToProps = (state) => {
  return {
    cardExpandedId: state.customer.cardExpandedId
  };
};

export default connect(
  mapStateToProps,
  { expandCard, collapseCard }
)(TouchableStampCard);
