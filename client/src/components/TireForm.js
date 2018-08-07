import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class TireForm extends React.Component {
  state = {
    tires: [{
      name: '',
      date: '',
      odometer: '',
      type: '',
      total_miles: '',
      tire: '',
      miles: '',
    }]
  }

  componentDidMount() {
    if (this.props.id)
    this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let tire = { ...this.state }
    this.props.submit(tire)
    this.setState({ ...this.state })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, date, odometer, type, total_miles, tire, miles } = this.state
    return(
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
              <Form.Input
                name="name"
                value={name}
                label="Modification"
                onChange={this.handleChange}
              />
              <Form.Input
                name="date"
                value={date}
                label="Date"
                onChange={this.handleChange}
              />
              <Form.Input
                name="odometer"
                value={odometer}
                label="Odometer"
                onChange={this.handleChange}
              />
              <Form.Input
                name="type"
                value={type}
                label="Type"
                onChange={this.handleChange}
              />
              <Form.Input
                name="total_miles"
                value={total_miles}
                label="Total Miles"
                onChange={this.handleChange}
              />
              <Form.Input
                name="tire"
                value={tire}
                label="Tire"
                onChange={this.handleChange}
              />
              <Form.Input
                name="miles"
                value={miles}
                label="Miles"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button color="red" style={styles.button}>Submit</Button>
          </Form>
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

export default TireForm;
