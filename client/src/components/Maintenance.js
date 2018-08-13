import React from 'react';
import { Table, Segment, Button, Form, Divider, Container } from 'semantic-ui-react';
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
    showForm: false,
  }

  componentDidMount = () => {
    axios.get('api/services')
    .then( res => this.setState({ services: res.data }) )
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/services', {...this.state })
    .then( () => {
      axios.get('api/services')
    .then( res => this.setState({ services: res.data, showForm: false, work: '', date: '', price: '', miles: '', notes: '', oci: '', uoa: ''}) )
    })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    });
  }

  render() {
    const { services, showForm } = this.state
    return(
      <div>
          <Button color='black' style={styles.button} onClick={this.toggleForm}>{ showForm ? "Cancel" : "Add A Service" }</Button>
            {/* { showForm ?
              <Segment style={{ margin: '50px'}}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
                    name="work"
                    required
                    value={work}
                    onChange={this.handleChange}
                    label="Work Done"

                  />
                  <Form.TextArea
                    name="date"
                    required
                    value={date}
                    onChange={this.handleChange}
                    label="Date"
                    />
                  <Button style={styles.button}>Submit</Button>
                </Form>
              </Segment> */}

            <div>
              <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Work</Table.HeaderCell>
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
                       <Button circular icon="edit" size="small" onClick={this.editMod}/>
                       <Button circular icon="delete" color="red" size="small" onClick={this.deleteMod}/>
                     </Table.Cell>
                   </Table.Row>
                 </Table.Body>
               )}
              </Table>
             </div>

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
