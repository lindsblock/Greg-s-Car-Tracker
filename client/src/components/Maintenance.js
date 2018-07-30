import React from 'react';

class Maintenance extends React.Component{
  render() {
    return(
      <h1 style={styles.headers}>Maintenance</h1>
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

export default Maintenance;
