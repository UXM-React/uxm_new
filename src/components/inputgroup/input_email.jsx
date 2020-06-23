import React from 'react'
import {Form} from 'react-bootstrap';


class InputEmail extends React.Component{
    constructor(){
        super();
        this.state={
            field:{
                email:''
            },
            errors: {}
        }
        this.emailValidate = this.emailValidate.bind(this);
    }

    emailValidate(e){
        let field = this.state.field;
        field[e.target.name] = e.target.value;
        this.setState({
            field
        });
      

        let errors= {};
        if (typeof field["email"] !== "undefined") { 
            
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(field["email"])) {
                errors["email"] = "* Please enter valid email-ID.";
            } 
        }
        this.setState({
            errors: errors
          });
    }


    render(){
        return(
            <div>
                <div className="col-3 mt-4 ml-3 text-left">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address Validation</Form.Label>
                            <Form.Control type="text" autoComplete="off" name="email" placeholder="Enter email" value = {this.state.field.email} onChange={this.emailValidate} className={this.state.errors.email ? 'is-invalid' : ''}/>
                            <Form.Text className="text-danger">
                                {this.state.errors.email}
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </div>
                
            </div>
        );
    }
}

export default InputEmail
