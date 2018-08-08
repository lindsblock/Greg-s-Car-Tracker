import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';
import TireForm from './TireForm';

class TireRotation extends React.Component{
  state = { tires: [], showForm: false }

  componentDidMount = () => {
    axios.get('api/tires')
    .then(res => this.setState({ tires: res.data}))
  }

  showForm = () => {
    return <TireForm submit={this.submit} />
  }

  show = () => {
   const { tires } = this.state
   return (
     <div>
       <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Date Installed</Table.HeaderCell>
             <Table.HeaderCell>Odometer</Table.HeaderCell>
             <Table.HeaderCell>Tire Name</Table.HeaderCell>
             <Table.HeaderCell>Tire Type</Table.HeaderCell>
             <Table.HeaderCell>Total Miles</Table.HeaderCell>
             <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         { tires.map( t =>
          <Table.Body>
            <Table.Row>
              <Table.Cell key={t.id}>{t.date}</Table.Cell>
              <Table.Cell key={t.id}>{t.odometer}</Table.Cell>
              <Table.Cell key={t.id}>{t.name}</Table.Cell>
              <Table.Cell key={t.id}>{t.kind}</Table.Cell>
              <Table.Cell key={t.id}>{t.total_miles}</Table.Cell>
              <Table.Cell>
                <Button circular icon="edit" size="small" onClick={this.edit}/>
                <Button circular icon="delete" color="red" size="small"/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
       </Table>
       <Header as="h1" style={styles.headers}>Tires</Header>
       <Button style={styles.button} color="red">Add New Tires</Button>
       <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>Tire Name</Table.HeaderCell>
             <Table.HeaderCell>Miles</Table.HeaderCell>
             <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         { tires.map( (t, i) =>
          <Table.Body>
            <Table.Row>
              <Table.Cell key={t.id}>{t.tire}</Table.Cell>
              <Table.Cell key={t.id}>{t.miles}</Table.Cell>
              <Table.Cell>
                <Button circular icon="edit" size="small" onClick={this.edit}/>
                <Button circular icon="delete" color="red" size="small" onCLick={this.delete}/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
       </Table>
       <Divider hidden />
     </div>
   )
 }

 form = () => {
    return <TireForm submit={this.submit} />
  }

  toggleForm = () => {
    this.setState( state => {
      return {showForm: !state.showForm }
    })
  }

  submit = (tire) => {
    const { tires } = this.state
    axios.post('/api/tires', { tire })
      .then( res => {
        this.setState({
          tires: [res.data, ...tires],
          showForm: false
        })
      })
  }

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <Header as="h1" style={styles.headers}>Tire Rotation</Header>
        <Container textAlign="center">
          <Button style={styles.button} color="red" onClick={this.toggleForm}>
           { showForm ? 'Cancel' : 'Add Tire Rotation' }
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

export default TireRotation;
