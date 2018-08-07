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
           </Table.Row>
         </Table.Header>
       </Table>
       <ul>
         { tires.map( t =>
             <li key={t.id}>
               <h1>{t.name}</h1>
             </li>
           )
         }
       </ul>
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
        <Header as="h1" style={styles.headers}>Tires</Header>
        <Container textAlign="center">
          <Button color="red" onClick={this.toggleForm}>
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
