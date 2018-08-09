import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class ModsForm extends React.Component {
  state ={
    mods: [{
      name: '',
      date: '',
      price: '',
      miles: '',
      notes: '',
    }],
  }

  componentDidMount() {
    if (this.props.id)
    this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let mod = { ...this.state }
    this.props.submit(mod)
    this.setState({ ...this.state })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  render() {
    const { name, date, price, miles, notes} = this.state
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
                name="price"
                value={price}
                label="Price"
                onChange={this.handleChange}
              />
              <Form.Input
                name="miles"
                value={miles}
                label="Miles"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea
              name="notes"
              value={notes}
              label="Notes"
              onChange={this.handleChange}
            />
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


export default ModsForm;
