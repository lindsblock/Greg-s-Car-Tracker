import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';

class ServiceForm extends React.Component {
  state= {
    services: [{
      work: '',
      date: '',
      price: '',
      miles: '',
      notes: '',
      oci: '',
      uoa: '',
    }],
  }

  componentDidMount() {
    if(this.props.id)
    this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let service = { ...this.state }
    this.props.submit(service)
    this.setState({ ...this.state})
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { work, date, price, miles, notes, oci, uoa } = this.state
    return(
      <div>
        <Container textAlign="center">
          <Form onSubmit={this.handleSubmit} style={{fontFamily: 'Ubuntu', fontSize:'18px'}}>
            <Form.Group widths="equal">
              <Form.Input
                name="work"
                value={work}
                label="Work Done"
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
            <Form.Input
              name="oci"
              value={oci}
              label="OCI"
              onChange={this.handleChange}
            />
            <Form.Input
              name="uoa"
              value={uoa}
              label="UOA"
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

export default ServiceForm;
