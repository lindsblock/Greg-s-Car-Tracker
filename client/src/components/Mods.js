import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import ModsForm from './ModsForm';
import axios from 'axios';

class Mods extends React.Component{
  state= { showForm: false, mod: {} }

  componentDidMount = () => {
    axios.get('api/mods')
    .then(res => this.setState({ mods: res.data }) )
  }

  toggleForm = () => {
   this.setState( state => {
     return { showForm: !state.showForm }
   });
 }

  render() {
    const { showForm } = this.state
    return(
      <div>
        <Header as="h1" style={styles.headers}>Mods</Header>
          <Button color="red" style={styles.button} onClick={this.toggleForm}>Add Modification</Button>
        {showForm ?  this.showForm() : <h1>test</h1> }

      </div>
    )
  }
}

const styles= {
  headers: {
    fontFamily: 'Anton',
    fontSize: '60px',
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Ubuntu',
    fontSize: '1em',
  }
}

export default Mods;
