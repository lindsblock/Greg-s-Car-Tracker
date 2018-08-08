import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class TireRotationForm extends React.Component {
  state = {
    tire_rotations: [{
      name: '',
      date: '',
      odometer: '',
      kind: '',
      total_miles: '',
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
    const { name, date, odometer, kind, total_miles } = this.state
    return(
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
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
                name="name"
                value={name}
                label="Tire Name"
                onChange={this.handleChange}
              />
              <Form.Input
                name="kind"
                value={kind}
                label="Tire Type"
                onChange={this.handleChange}
              />
              <Form.Input
                name="total_miles"
                value={total_miles}
                label="Total Miles"
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

export default TireRotationForm;
