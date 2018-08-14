import React from 'react';
import { Table, Segment, Button, Form, Divider, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import ServiceForm from './ServiceForm';

class Maintenance extends React.Component {
  state = { showForm: false, services: [], edit: false }

  componentDidMount = () => {
    axios.get('api/services')
    // axios.get('api/filters')
    .then( res => this.setState({ services: res.data }) )
  }

  showForm = () => {
     return <ServiceForm submit={this.submit} />
   }

   editService = () => {
     const { service } = this.state
     return <ServiceForm submit={this.submit} {...service} />
   }

   deleteService = (id) => {
     axios.delete(`/api/services/${id}`)
     let service = { ...this.state }
     this.setState({ service })
   }

   toggleForm = () => {
     this.setState( state => {
       return { showForm: !state.showForm }
     })
   }

   submit = (service) => {
     const { services } = this.state
     axios.post('/api/services', { service })
       .then( res => {
         this.setState({
           services: [...services, res.data ],
           showForm: false
         })
       })
   }

   showServices = () => {
     const { services } = this.state
     return (
       <div>
         <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
           <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Work Done</Table.HeaderCell>
               <Table.HeaderCell>Install Date</Table.HeaderCell>
               <Table.HeaderCell>Price</Table.HeaderCell>
               <Table.HeaderCell>Miles</Table.HeaderCell>
               <Table.HeaderCell>Notes</Table.HeaderCell>
               <Table.HeaderCell>OCI</Table.HeaderCell>
               <Table.HeaderCell>UOA</Table.HeaderCell>
               <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
             </Table.Row>
           </Table.Header>
           { services.map( (s) =>
            <Table.Body>
              <Table.Row>
                <Table.Cell key={s.id}>{s.work}</Table.Cell>
                <Table.Cell key={s.id}>{s.date}</Table.Cell>
                <Table.Cell key={s.id}>$ {s.price}</Table.Cell>
                <Table.Cell key={s.id}>{s.miles}</Table.Cell>
                <Table.Cell key={s.id}>{s.notes}</Table.Cell>
                <Table.Cell key={s.id}>{s.oci}</Table.Cell>
                <Table.Cell key={s.id}>{s.uoa}</Table.Cell>
                <Table.Cell>
                  <Button circular icon="edit" size="small" onClick={this.editService}/>
                  <Button circular icon="delete" color="red" size="small" onClick={this.deleteService}/>
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
         <Header as="h1" style={styles.headers}>Services</Header>
         <Container textAlign="center">
           <Button color="red" onClick={this.toggleForm}>
            { showForm ? 'Cancel' : 'Add Service' }
          </Button>
          <Divider hidden />
          { showForm ? this.showForm() : this.showServices() }
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

export default Maintenance;
