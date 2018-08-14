import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import ModsForm from './ModsForm';
import axios from 'axios';

class Mods extends React.Component{
  state = { showForm: false, mods: [], edit: false }

  componentDidMount = () => {
    axios.get('api/mods')
    .then(res => this.setState({ mods: res.data }) )
  }

 showForm = () => {
    return <ModsForm submit={this.submit} />
  }

  editMod = () => {
    const { mod } = this.state
    return <ModsForm submit={this.submit} {...mod} />
  }

  deleteMod = (id) => {
    axios.delete(`/api/mods/${id}`)
    let mod = { ...this.state }
    this.setState({ mod })
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
           mods: [...mods, res.data ],
           showForm: false
         })
       })
   }

  showMods = () => {
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
             <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         { mods.map( (m, i) =>
          <Table.Body>
            <Table.Row>
              <Table.Cell key={m.id}>{m.name}</Table.Cell>
              <Table.Cell key={m.id}>{m.date}</Table.Cell>
              <Table.Cell key={m.id}>$ {m.price}</Table.Cell>
              <Table.Cell key={m.id}>{m.miles}</Table.Cell>
              <Table.Cell key={m.id}>{m.notes}</Table.Cell>
              <Table.Cell>
                <Button circular icon="edit" size="small" onClick={this.editMod}/>
                <Button circular icon="delete" color="red" size="small" onClick={this.deleteMod}/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
       </Table>
     </div>
   )
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
         { showForm ? this.showForm() : this.showMods() }
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
