import React from 'react';

class Purchase extends React.Component{
  render() {
    return(
      <h1 style={styles.headers}>Purchase</h1>
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

export default Purchase;
