import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class GasolineForm extends React.Component {
  state = {
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
  }

  componenetDidMount() {
    if (this.props.id)
    this.serState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let gasoline = { ...this.state }
    this.props.submit(gasoline)
    this.setState({ ...this.state })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { location, octane, gallons, miles, mpg, price, date, miles_between, notes } = this.state
    return(
      <div>
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

export default GasolineForm;
