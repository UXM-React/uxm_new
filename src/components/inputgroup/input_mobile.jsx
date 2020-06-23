import React from 'react'
import {Form} from 'react-bootstrap';

class InputMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      field: {
        mobileno: ''
      },
      errors: {}
    }
    this.mobileNumChange = this.mobileNumChange.bind(this);
  };


  mobileNumChange(e) {
    let field = this.state.field;
    field[e.target.name] = e.target.value;
    this.setState({
      field
    });

    let errors = {};

    // console.log('field', field)

    if (typeof field["mobileno"] !== "undefined") {
      if (!field["mobileno"].match(/^[0-9]{10}$/)) {
        // formIsValid = false;
        errors["mobileno"] = " *Mobile Number should be 10 digit";
      }
    }

    this.setState({
      errors: errors
    });

  }

  

render() {
  return (
  <div className="row">
    <div className="col-3 mt-4 ml-3 text-left">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile Number Validation</Form.Label>
                <Form.Control type="text" autoComplete="off" name="mobileno" placeholder="Enter phone" value = {this.state.field.mobileno} onChange={this.mobileNumChange} className={this.state.errors.mobileno ? 'is-invalid' : ''}/>
                <Form.Text className="text-danger">
                    {this.state.errors.mobileno}
                </Form.Text>
            </Form.Group>
        </Form>
    </div>
  </div>
    );
}


}



export default InputMobile
