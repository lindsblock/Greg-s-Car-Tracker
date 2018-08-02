import React from 'react';
import { Header, Table, Button, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';

class TireRotation extends React.Component{
  state = {
    tires: [{
      name: '',
      date: '',
      odometer: '',
      type: '',
      total_miles: '',
      tire: '',
      miles: '',
    }],
    showForm: false,
  }

  componentDidMount = () => {
    axios.get('api/tires')
    .then(res => this.setState({ tires: res.data}))
  }

  toggleForm = () => {
    this.setState( state => {
      return {showForm: !state.showForm }
    });
  }

  render() {
    const { tires } = this.state;
    const { name, date, odometer, type, total_miles, tire, miles, showForm } = this.state;
    return(
      <div>
        <Header as="h1" style={styles.headers}>Tire Rotation</Header>
        <Container textAlign="center">
          <Button color="red" style={styles.button} onCLick={this.toggleForm}>{showForm ? "Cancel" : "Add Tire Rotation"}</Button>
        </Container>
        <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Installed</Table.HeaderCell>
              <Table.HeaderCell>Odometer</Table.HeaderCell>
              <Table.HeaderCell>Tire Name</Table.HeaderCell>
              <Table.HeaderCell>Tire Type</Table.HeaderCell>
              <Table.HeaderCell>Total Miles</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Table celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tire</Table.HeaderCell>
              <Table.HeaderCell>Miles</Table.HeaderCell>

            </Table.Row>
          </Table.Header>
        </Table>

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

export default TireRotation;
