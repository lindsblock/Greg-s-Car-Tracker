import React from 'react';
import { Form, Header, Button, Divider, Container, Segment } from 'semantic-ui-react';
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
    }]
  }

  componentDidMount = () => {
    axios.get('api/gasolines')
    .then(res => this.setState({ gasolines: res.data }) )
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
        { showForm ?
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
              <Form.Input
                name="location"
                value={location}
                label="Location"
                onChange={this.handleChange}
              />
              <Form.Input
                name="octane"
                value={octane}
                onChange={this.handleChange}
                label="Octane"
              />
              <Form.Input
                name="gallons"
                value={gallons}
                onChange={this.handleChange}
                label="Gallons"
              />
              <Form.Input
                name="miles"
                value={miles}
                onChange={this.handleChange}
                label="Total Miles"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="mpg"
                value={mpg}
                onChange={this.handleChange}
                label="MPG"
              />
              <Form.Input
                name="price"
                value={price}
                onChange={this.handleChange}
                label="Price"
              />
              <Form.Input
                name="date"
                value={date}
                onChange={this.handleChange}
                label="Date"
              />
              <Form.Input
                name="miles_between"
                value={miles_between}
                onChange={this.handleChange}
                label="Miles Between Last Fillup"
              />
            </Form.Group>
            <Form.TextArea
              name="notes"
              value={notes}
              onChange={this.handleChange}
              label="Notes"
            />
            <Button color="red" style={styles.button}>Submit</Button>
          </Form>
        :
        <div>
          <Segment>
            { gasolines.map( g =>
            <p key={g.id}>{location} </p>)}
          </Segment>
        </div>
      }
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
