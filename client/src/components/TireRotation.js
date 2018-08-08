import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';
import TireRotationForm from './TireRotationForm';

class TireRotation extends React.Component{
  state = { tire_rotations: [], showForm: false, tires:[] }

  componentDidMount = () => {
    axios.get('api/tire_rotations', 'api/tires')
    .then(res => this.setState({ tire_rotations: res.data}))
  }

  showForm = () => {
    return <TireRotationForm submit={this.submit} />
  }

  show = () => {
   const { tire_rotations, tires } = this.state
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
         { tire_rotations.map( r =>
          <Table.Body>
            <Table.Row>
              <Table.Cell key={r.id}>{r.date}</Table.Cell>
              <Table.Cell key={r.id}>{r.odometer}</Table.Cell>
              <Table.Cell key={r.id}>{r.name}</Table.Cell>
              <Table.Cell key={r.id}>{r.kind}</Table.Cell>
              <Table.Cell key={r.id}>{r.total_miles}</Table.Cell>
              <Table.Cell>
                <Button circular icon="edit" size="small" onClick={this.edit}/>
                <Button circular icon="delete" color="red" size="small"/>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
       </Table>
       {/* THIS PART IS NOT WORKING YET */}
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
              <Table.Cell key={t.id}>{t.name}</Table.Cell>
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
    return <TireRotationForm submit={this.submit} />
  }

  toggleForm = () => {
    this.setState( state => {
      return {showForm: !state.showForm }
    })
  }

  submit = (tire_rotation) => {
    const { tire_rotations } = this.state
    axios.post('/api/tire_rotations', { tire_rotation })
      .then( res => {
        this.setState({
          tire_rotations: [res.data, ...tire_rotations],
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
