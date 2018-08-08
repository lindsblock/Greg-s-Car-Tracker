import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

class NavBar extends React.Component{
  render() {
    return(
      <div style={styles.navHeaders}>
        <div className='desktopSizeDiv'>
          <Menu pointing secondary style={{width: '100%'}}>
            <Link to='/'>
              <Menu.Item style={styles.navHeaders} name='home'>Home</Menu.Item>
            </Link>
            <Link to='/purchase'>
              <Menu.Item style={styles.navHeaders} name='purchase'>Purchase</Menu.Item>
            </Link>
            <Link to='/gasoline'>
              <Menu.Item style={styles.navHeaders} name='gasoline'>Gasoline</Menu.Item>
            </Link>
            <Link to='/mods'>
              <Menu.Item style={styles.navHeaders} name='mods'>Mods</Menu.Item>
            </Link>
            <Link to='/maintenance'>
              <Menu.Item style={styles.navHeaders} name='maintenance'>Maintenance</Menu.Item>
            </Link>
            <Link to='/tires'>
              <Menu.Item style={styles.navHeaders} name='tires'>Tire Rotation</Menu.Item>
            </Link>
          </Menu>
        </div>
        <div className='mobileSizeDiv'>
          <Dropdown icon='content' floating className='link item' style={{display: 'flex', justifyContent: 'center', fontSize: '24px', margin: '20px'}}>
            <Dropdown.Menu className='menuTop'>
              <Menu.Item as='a' href='/'>Home</Menu.Item>
              <Menu.Item as='a' href='/purchase'>Purchase</Menu.Item>
              <Menu.Item as='a' href='/gasoline'>Gasoline</Menu.Item>
              <Menu.Item as='a' href='/mods'>Mods</Menu.Item>
              <Menu.Item as='a' href='/maintenance'>Maintenance</Menu.Item>
              <Menu.Item as='a' href='/tires'>Tire Rotation</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  }
}
const styles={
  navHeaders:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    marginTop:'5px',
    marginBottom: '5px',
    fontSize: '20px',
    borderRight: '6px, solid, black',
  }
}

export default NavBar;
