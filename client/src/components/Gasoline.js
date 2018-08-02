import React from 'react';
import { Form, Header, Button, Divider, Container, Segment, Table, Card } from 'semantic-ui-react';
import axios from 'axios';


class Gasoline extends React.Component{
  state={
    gasolines: [{
      location: '',
      octane: '',
      gallons: '',
      miles: '',
      mpg: '',
      price: '',
      date: '',
      miles_between: '',
      notes: '',
    }],
    showForm: false,
  }

  componentDidMount = () => {
    axios.get('api/gasolines')
    .then(res => this.setState({ gasolines: res.data }) )
  }

  deleteGasoline = (gasoline) => {
    const {gasolines} = this.state;
    axios.delete(`/api/gasolines/${gasolines.id}`)
    .then (res => this.setState({ gasoline: res.data }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/gasolines', {...this.state})
    .then ( () => {
      axios.get('api/gasolines')
      .then(res => this.setState({
        gasolines: res.data,
        showForm: false,
        location: '',
        octane: '',
        gallons: '',
        miles: '',
        mpg: '',
        price: '',
        date: '',
        miles_between: '',
        notes: '',
      }))
    })
  }

  toggleForm = () => {
  this.setState( state => {
    return { showForm: !state.showForm }
  });
}

  render() {
    const { location, octane, gallons, miles, mpg, price, date, miles_between, notes, showForm } = this.state;
    const { gasolines } = this.state;
    return(
      <div>
        <Header as="h1" style={styles.headers}>Gasoline</Header>
        <Container textAlign="center">
        <Button color="red" style={styles.button} onClick={this.toggleForm}>{showForm ? "Cancel" : "Add Gas" }</Button>
        <Divider hidden />
        { showForm ?
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
              <Form.Input
                name="location"
                value={location}
                label="Location"
                onChange={this.handleChange}
                required
              />
              <Form.Input
                name="octane"
                value={octane}
                onChange={this.handleChange}
                label="Octane"
                required
              />
              <Form.Input
                name="gallons"
                value={gallons}
                onChange={this.handleChange}
                label="Gallons"
                required
              />
              <Form.Input
                name="miles"
                value={miles}
                onChange={this.handleChange}
                label="Total Miles"
                required
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="mpg"
                value={mpg}
                onChange={this.handleChange}
                label="MPG"
                required
              />
              <Form.Input
                name="price"
                value={price}
                onChange={this.handleChange}
                label="Price"
                required
              />
              <Form.Input
                name="date"
                value={date}
                onChange={this.handleChange}
                label="Date"
                required
              />
              <Form.Input
                name="miles_between"
                value={miles_between}
                onChange={this.handleChange}
                label="Miles Between Last Fillup"
                required
              />
            </Form.Group>
            <Form.TextArea
              name="notes"
              value={notes}
              onChange={this.handleChange}
              label="Notes"
              reguired
            />
            <Button color="red" style={styles.button}>Submit</Button>
            <Button color="red" style={styles.button} onClick={this.toggleForm}>Cancel</Button>
          </Form>
        :
        <div>
          <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Octane</Table.HeaderCell>
                <Table.HeaderCell>Gallons</Table.HeaderCell>
                <Table.HeaderCell>Total Miles</Table.HeaderCell>
                <Table.HeaderCell>MPG</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Miles Between Fillups</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                { gasolines.map( g =>
                  <Table.HeaderCell key={g.id}>{g.location} </Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      }
      </Container>
      {gasolines.map( g =>
      <Card key={g.id}>
        <Card.Content>
          <Card.Header>{g.location}</Card.Header>
          <Card.Description>{g.octane}</Card.Description>
          <Button key={g.id} onCLick={this.deleteGasoline}>Delete</Button>
        </Card.Content>
      </Card>)}
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
    fontFamily: 'Ubuntu:300',
    fontSize: '1em',
  }
}

export default Gasoline;
