import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import ModsForm from './ModsForm';
import axios from 'axios';

class Mods extends React.Component{
  state = { showForm: false, mods: [] }

  componentDidMount = () => {
    axios.get('api/mods')
    .then(res => this.setState({ mods: res.data }) )
  }

 showForm = () => {
    return <ModsForm submit={this.submit} />
  }

  show = () => {
   const { mods } = this.state
   return (
     <div>
       <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Modification</Table.HeaderCell>
             <Table.HeaderCell>Install Date</Table.HeaderCell>
             <Table.HeaderCell>Price</Table.HeaderCell>
             <Table.HeaderCell>Miles</Table.HeaderCell>
             <Table.HeaderCell>Notes</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
       </Table>
       <ul>
         { mods.map( m =>
             <li key={m.id}>
               <h1>{m.name}</h1>
             </li>
           )
         }
       </ul>
     </div>
   )
 }
 form = () => {
    return <ModsForm submit={this.submit} />
  }
  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  submit = (mod) => {
    const { mods } = this.state
    axios.post('/api/mods', { mod })
      .then( res => {
        this.setState({
          mods: [res.data, ...mods],
          showForm: false
        })
      })
  }

  render() {
    const { showForm } = this.state
    return(
      <div>
        <Header as="h1" style={styles.headers}>Mods</Header>
        <Container textAlign="center">
          <Button color="red" onClick={this.toggleForm}>
           { showForm ? 'Cancel' : 'Add Modification' }
         </Button>
         <Divider hidden />
         { showForm ? this.form() : this.show() }
       </Container>
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
