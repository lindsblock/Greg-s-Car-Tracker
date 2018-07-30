import React from 'react';
import { Form } from 'semantic-ui-react';

class Gas extends React.Component{
  state={
    location: ''
  }
  render() {
    return(
      <div>
        <h1>Gas</h1>
        <Form>
          <Form.Input
            name=""
            required
            
            label="Location"
          />
        </Form>
      </div>
    )
  }
}

export default Gas;
