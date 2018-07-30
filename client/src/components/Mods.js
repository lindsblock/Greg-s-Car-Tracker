import React from 'react';

class Mods extends React.Component{
  render() {
    return(
      <h1 style={styles.headers}>Mods</h1>
    )
  }
}

const styles= {
  headers: {
    fontFamily: 'Anton',
    fontSize: '60px',
    textAlign: 'center',
  },
}

export default Mods;
