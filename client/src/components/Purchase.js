import React from 'react';
import { Table, Divider, Grid, Image } from 'semantic-ui-react';

class Purchase extends React.Component{
  render() {
    return(
      <div className="backgroundTwo">
        <h1 style={styles.headers}>Purchase Information</h1>
        <Grid container stackable >
        <Grid.Row verticalAlign="middle">
                <Grid.Column style={{fontFamily: 'Arsenal'}} width={9}>
                  <Table fixed celled style={{fontFamily: 'Ubuntu', fontSize:'16px' }}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Purchase Date</Table.HeaderCell>
                        <Table.HeaderCell>Dealer</Table.HeaderCell>
                        <Table.HeaderCell>Salesman</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>11/10/14</Table.Cell>
                        <Table.Cell>Mark Miller Subaru- Midtown</Table.Cell>
                        <Table.Cell>Bob Cleveland</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    centered
                    bordered
                    rounded
                    size='large'
                    src='../images/car1.jpg'
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Table collapsing celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell >Total Spent</Table.HeaderCell>
                  <Table.HeaderCell>$/Mile</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>$45,846.39</Table.Cell>
                  <Table.Cell>$0.55</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        <Divider hidden />
        <Table collapsing celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>New/Used</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Make</Table.HeaderCell>
              <Table.HeaderCell>Model</Table.HeaderCell>
              <Table.HeaderCell>Transmission</Table.HeaderCell>
              <Table.HeaderCell>Ext. Color</Table.HeaderCell>
              <Table.HeaderCell>Int. Color</Table.HeaderCell>
              <Table.HeaderCell>Vin</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>New</Table.Cell>
              <Table.Cell>2015</Table.Cell>
              <Table.Cell>Subaru</Table.Cell>
              <Table.Cell>WRX</Table.Cell>
              <Table.Cell>6MT</Table.Cell>
              <Table.Cell>Lightning Red</Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>XXXX</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Divider hidden />
        <h1 style={styles.headers}>Sale Info</h1>
        <Table collapsing compact="very" celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell>Cash Price of Vehicle</Table.HeaderCell>
              <Table.Cell>$25,919</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Accessories/Options</Table.HeaderCell>
              <Table.Cell>$391</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Total Cash Price</Table.HeaderCell>
              <Table.Cell error>$26,310</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Rebate</Table.HeaderCell>
              <Table.Cell>-$600</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Dealer Doc Service Fee</Table.HeaderCell>
              <Table.Cell>$217.25</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Subtotal- Taxable Items</Table.HeaderCell>
              <Table.Cell>$25,981.25</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Utah Sales Tax</Table.HeaderCell>
              <Table.Cell>$1,831.68</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Utah License/ Reg.</Table.HeaderCell>
              <Table.Cell>$73.50</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Utah Property Tax</Table.HeaderCell>
              <Table.Cell>$150</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Utah Tire Waste Fee</Table.HeaderCell>
              <Table.Cell>$5</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Deposit</Table.HeaderCell>
              <Table.Cell>-$500</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Down Payment</Table.HeaderCell>
              <Table.Cell>-$900</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Total of All Items</Table.HeaderCell>
              <Table.Cell error>$28,041.43</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Total Credits</Table.HeaderCell>
              <Table.Cell>$9,500</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Balance Due</Table.HeaderCell>
              <Table.Cell error>$18,541.43</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Divider hidden />
        <h1 style={styles.headers}>Loan Info</h1>
        <Table collapsing celled style={{fontFamily: 'Ubuntu', fontSize:'16px'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Bank</Table.HeaderCell>
              <Table.Cell>XXXX</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Amount Financed</Table.HeaderCell>
              <Table.Cell>$18,541.43</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Finance Charge</Table.HeaderCell>
              <Table.Cell>$1,317.37</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>APR</Table.HeaderCell>
              <Table.Cell>2.69%</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Monthly Payment</Table.HeaderCell>
              <Table.Cell>$330.98</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Balance</Table.HeaderCell>
              <Table.Cell error>$5,588.60</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Divider hidden />
      </div>
    )
  }
}

const styles= {
  headers: {
    fontFamily: 'Anton',
    fontSize: '60px',
    textAlign: 'center',
    color: 'red',
  },
}

export default Purchase;
