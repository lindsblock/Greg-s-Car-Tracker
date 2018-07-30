import React from 'react';

class TireRotation extends React.Component{
  render() {
    return(
      <h1 style={styles.headers}>Tire Rotation</h1>
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

export default TireRotation;
