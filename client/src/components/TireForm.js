import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class TireForm extends React.Component {
  state = {
    tires: [{
      name: '',
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
    const { name, miles } = this.state
    return(
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
              <Form.Input
                name="name"
                value={name}
                label="Name"
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
