import React from 'react';
import { Header, Button, Divider, Container, Table } from 'semantic-ui-react';
import GasolineForm from './GasolineForm';
import axios from 'axios';


class Gasoline extends React.Component{
  state = { showForm: false, gasolines: [], edit: false }

  componentDidMount = () => {
    axios.get('api/gasolines')
    .then(res => this.setState({ gasolines: res.data }) )
  }

  showForm = () => {
    return <GasolineForm submit={this.submit} />
  }

  // edit = () => {
  //   const { gasoline } = this.state
  //   return <GasolineForm submit={this.submit} {...gasoline} />
  // }

  deleteGasoline = (id) => {
    axios.delete(`/api/gasolines/${id}`)
    let gasoline={...this.state}
    this.setState({...gasoline})
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

   submit = (gasoline) => {
     const { gasolines } = this.state
     axios.post('/api/gasolines', { gasoline })
       .then( res => {
         this.setState({
           gasolines: [...gasolines, res.data],
           showForm: false
         })
       })
   }

  showGasolines = () => {
   const { gasolines} = this.state
   return (
     <div>
     <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Location</Table.HeaderCell>
           <Table.HeaderCell>Octane</Table.HeaderCell>
           <Table.HeaderCell>Gallons</Table.HeaderCell>
           <Table.HeaderCell>Miles</Table.HeaderCell>
           <Table.HeaderCell>MPG</Table.HeaderCell>
           <Table.HeaderCell>Price</Table.HeaderCell>
           <Table.HeaderCell>Date</Table.HeaderCell>
           <Table.HeaderCell>Miles Between</Table.HeaderCell>
           <Table.HeaderCell>Notes</Table.HeaderCell>
           <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
         </Table.Row>
       </Table.Header>
       { gasolines.map( (g, i) =>
       <Table.Body >
         <Table.Row>
             <Table.Cell key={g.id}>{g.location} </Table.Cell>
             <Table.Cell key={g.id}>{g.octane}</Table.Cell>
             <Table.Cell key={g.id}>{g.gallons}</Table.Cell>
             <Table.Cell key={g.id}>{g.miles}</Table.Cell>
             <Table.Cell key={g.id}>{g.mpg}</Table.Cell>
             <Table.Cell key={g.id}>{g.price}</Table.Cell>
             <Table.Cell key={g.id}>{g.date}</Table.Cell>
             <Table.Cell key={g.id}>{g.miles_between}</Table.Cell>
             <Table.Cell key={g.id}>{g.notes}</Table.Cell>
             <Table.Cell>
               <Button circular icon="edit" size="small" onClick={this.edit} />
               <Button circular icon="delete" color="red" size="small" onClick={this.deleteGasoline} />
             </Table.Cell>
         </Table.Row>
       </Table.Body>
     )}
     </Table>
     <Divider hidden />
   </div>
   )
 }

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <Header as="h1" style={styles.headers}>Gasoline</Header>
        <Container textAlign="center">
          <Button color="red" onClick={this.toggleForm}>
           { showForm ? 'Cancel' : 'Add Gasoline' }
         </Button>
         <Divider hidden />
         { showForm ? this.showForm() : this.showGasolines() }
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

export default Gasoline;
