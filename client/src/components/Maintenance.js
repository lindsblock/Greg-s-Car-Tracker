import React from 'react';
import { Table, Segment, Button, Form, Divider, Container, Header } from 'semantic-ui-react';
import axios from 'axios';

class Maintenance extends React.Component {
  state = {
    services: [{
      work: '',
      date: '',
      price: '',
      miles: '',
      notes: '',
      oci: '',
      uoa: '',
    }],
    filters: [{
      date: '',
      complete: '',
      oci:'',
      miles: '',
    }],
    showServiceForm: false,
    showFilterForm: false,
  }

  componentDidMount = () => {
    axios.get('api/services')
    // axios.get('api/filters')
    .then( res => this.setState({ services: res.data }) )
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmitService = (e) => {
    e.preventDefault()
    axios.post('api/services', {...this.state })
    .then( () => {
      axios.get('api/services')
    .then( res => this.setState({ services: res.data, showForm: false, work: '', date: '', price: '', miles: '', notes: '', oci: '', uoa: ''}) )
    })
  }
  handleSubmitFilter = (e) => {
    e.preventDefault()
    axios.post('api/filters', {...this.state })
    .then( () => {
      axios.get('api/filters')
    .then( res => this.setState({ services: res.data, showForm: false, date: '', complete: '', miles: '', oci: ''}) )
    })
  }

  deleteService = (id) => {
    axios.delete(`/api/services/${id}`)
    let service = { ...this.state }
    this.setState({ service })
  }


  toggleServiceForm = () => {
    this.setState( state => {
      return { showServiceForm: !state.showServiceForm }
    });
  }

  toggleFilterForm = () => {
    this.setState( state => {
      return { showFilterForm: !state.showFilterForm }
    });
  }

  render() {
    const { services, showServiceForm, showFilterForm, work, date, price, miles, notes, oci, uoa, filters } = this.state
    return(
      <div>
        <Header as="h1" style={styles.headers}>Maintenance</Header>
        <Container textAlign="center">
          <Button color="red" style={styles.button} onClick={this.toggleServiceForm}>{ showServiceForm ? "Cancel" : "Add A Service" }</Button>
          <Divider hidden />
            { showServiceForm ?
              <Form onSubmit={this.handleSubmitService} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
                <Form.Group widths="equal">
                  <Form.Input
                    name="work"
                    value={work}
                    onChange={this.handleChange}
                    label="Work Done"

                  />
                  <Form.Input
                    name="date"
                    value={date}
                    onChange={this.handleChange}
                    label="Date"
                    />
                  <Form.Input
                    name="price"
                    value={price}
                    onChange={this.handleChange}
                    label="Price"
                    />
                  <Form.Input
                    name="miles"
                    value={miles}
                    onChange={this.handleChange}
                    label="Miles"
                    />
                </Form.Group>
                <Form.TextArea
                  name="notes"
                  value={notes}
                  onChange={this.handleChange}
                  label="notes"
                />
                <Form.Group widths="equal">
                  <Form.Input
                    name="oci"
                    value={oci}
                    onChange={this.handleChange}
                    label="OCI"
                    />
                  <Form.Input
                    name="uoa"
                    value={uoa}
                    onChange={this.handleChange}
                    label="UOA"
                    />
                </Form.Group>
                <Button  color="red" style={styles.button}>Submit</Button>
              </Form>
              :
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
             <Header as="h1" style={styles.headers}>Filters</Header>
             <Button color="red" style={styles.button} onClick={this.toggleForm}>{ showFilterForm ? "Cancel" : "Add A Filter" }</Button>
             <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
               <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell>Date</Table.HeaderCell>
                   <Table.HeaderCell>Filter Change?</Table.HeaderCell>
                   <Table.HeaderCell>Miles on Filter</Table.HeaderCell>
                   <Table.HeaderCell>OCI</Table.HeaderCell>
                   <Table.HeaderCell>Edit/Delete</Table.HeaderCell>
                 </Table.Row>
               </Table.Header>
               { filters.map( (f) =>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell key={f.id}>{f.date}</Table.Cell>
                    <Table.Cell key={f.id}>{f.complete}</Table.Cell>
                    <Table.Cell key={f.id}>$ {f.miles}</Table.Cell>
                    <Table.Cell key={f.id}>{f.oci}</Table.Cell>
                    <Table.Cell>
                      <Button circular icon="edit" size="small" onClick={this.editService}/>
                      <Button circular icon="delete" color="red" size="small" onClick={this.deleteService}/>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              )}
            </Table>
           </div>
         }
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
