import React from 'react';
import { Header } from 'semantic-ui-react';

class Home extends React.Component{
  render() {
    return(
      <div className="background" style={{padding: '300px', textAlign: "center"}}>
        <Header style={{fontFamily:'Anton', color:'red', fontSize:'100px'}}>GREG'S CAR APP</Header>
      </div>
    )
  }
}

export default Home;
