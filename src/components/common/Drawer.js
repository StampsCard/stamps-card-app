import React from 'react';
import { Drawer as NBDrawer } from 'native-base';
import SideBar from './SideBar';

class Drawer extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  render() {
    return (
      <NBDrawer
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => this.closeDrawer()}
        content={<SideBar navigation={this.props.navigation} user={this.props.user} />}
      >
        {this.props.children}
      </NBDrawer>
    );
  }
}

export { Drawer };
