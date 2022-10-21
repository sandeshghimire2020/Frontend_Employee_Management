import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class viewEmployee extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {

            this.setState({employee: res.data});
            // let employee = res.data;
            // this.setState({firstName: employee.firstName,
            //     lastName: employee.lastName,
            //     emailId: employee.emailId});
        });
    }
  render() {
    return (
      <div>
        <h2>Employee Information</h2>
        <p>
            FirstName:  { this.state.employee.firstName }
            <br></br>
            LastName: { this.state.employee.lastName }
            <br></br>
            EmailID: { this.state.employee.emailId }

        </p>
       
        
        </div>
    )
  }
}
