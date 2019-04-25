import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import UserPanel from './UserPanel';
import './SidePanel.css'
class SidePanel extends React.Component{
/*  showSettings (event) {
    event.preventDefault();
  }*/

  render(){
     const{ currentUser } =this.props;
    return(
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <main id="page-wrap">
            <UserPanel currentUser={currentUser} />
          </main>
        </Menu>
      </div>
    )
  }
}

export default SidePanel;
