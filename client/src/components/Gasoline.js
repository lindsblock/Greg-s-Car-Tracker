import React from 'react';
import { Form, Header, Button, Divider, Container, Segment, Table, Card } from 'semantic-ui-react';
import axios from 'axios';
import GasolineForm from './GasolineForm';


class Gasoline extends React.Component{
  state = { showForm: false, gasolines: [] }

  componentDidMount = () => {
    axios.get('api/gasolines')
    .then(res => this.setState({ gasolines: res.data }) )
  }

  toggleForm = () => {
   this.setState( state => {
     return { showForm: !state.showForm }
   });
 }

 showForm = () => {
    return <GasolineForm submit={this.submit} />
  }

show = () => {
 const { gasolines } = this.state
 return (
   <div>
   <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell children>Location</Table.HeaderCell>
         <Table.HeaderCell>Octane</Table.HeaderCell>
         <Table.HeaderCell>Gallons</Table.HeaderCell>
         <Table.HeaderCell>Miles</Table.HeaderCell>
         <Table.HeaderCell>MPG</Table.HeaderCell>
         <Table.HeaderCell>Price</Table.HeaderCell>
         <Table.HeaderCell>Date</Table.HeaderCell>
         <Table.HeaderCell>Miles Between</Table.HeaderCell>
         <Table.HeaderCell>Notes</Table.HeaderCell>
       </Table.Row>
     </Table.Header>
     { gasolines.map( g =>
     <Table.Body >
       <Table.Row>
           <Table.Cell key={g.id}>{g.location}</Table.Cell>
           <Table.Cell key={g.id}>{g.octane}</Table.Cell>
           <Table.Cell key={g.id}>{g.gallons}</Table.Cell>
           <Table.Cell key={g.id}>{g.miles}</Table.Cell>
           <Table.Cell key={g.id}>{g.mpg}</Table.Cell>
           <Table.Cell key={g.id}>{g.price}</Table.Cell>
           <Table.Cell key={g.id}>{g.date}</Table.Cell>
           <Table.Cell key={g.id}>{g.miles_between}</Table.Cell>
           <Table.Cell key={g.id}>{g.notes}</Table.Cell>
       </Table.Row>
     </Table.Body>
   )}
   </Table>
   <Divider hidden />
 </div>
 )
}

form = () => {
   return <GasolineForm submit={this.submit} />
 }

 submit = (gasoline) => {
   const { gasolines } = this.state
   axios.post('/api/gasolines', { gasoline })
     .then( res => {
       this.setState({
         gasolines: [res.data, ...gasolines],
         showForm: false
       })
     })
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
         { showForm ? this.form() : this.show() }
        </Container>
      </div>
    );
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
