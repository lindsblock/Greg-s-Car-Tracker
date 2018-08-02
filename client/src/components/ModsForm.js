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

  render() {
    const { name, date, price, miles, notes} = this.state
    return(
      <div>
        <Container textAlign="center">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                name="name"
                value={name}
                label="Modification"
                required
                onChange={this.handleChange}
              />
              <Form.Input
                name="date"
                value={date}
                label="Date"
                required
                onChange={this.handleChange}
              />
              <Form.Input
                name="price"
                value={price}
                label="Price"
                required
                onChange={this.handleChange}
              />
              <Form.Input
                name="miles"
                value={miles}
                label="Miles"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea
              name="notes"
              value={notes}
              label="Notes"
              required
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
