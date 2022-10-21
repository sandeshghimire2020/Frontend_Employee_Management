import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    
            constructor(props) {
            super(props)
            this.state = {
                employees: []
            }

            // this.addEmployee = addEmployee.bind(this);
            this.addEmployee = this.addEmployee.bind(this);
            this.editEmployee = this.editEmployee.bind(this);
          }  
        editEmployee(id){
            this.props.history.push(`/createEmployee/${id}`);
            
        }
         

          componentDidMount(){
                EmployeeService.getEmployees().then((res) => {
                    this.setState({ employees: res.data});
                });
          }

          addEmployee(){
            this.props.history.push('./createEmployee/-1');
          }

          //comment
          
  render() {
    return (
      <div>
            <h2 className= "text"> Employees List </h2>
            <br></br>
            <div className='row'>
                <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                
            </div>
            <br></br>
               
            <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                           
                                <th> Employee First Name </th>
                                <th> Employee Last Name </th>
                                <th> Employee Email Id </th>
                                <th> Action </th>

                            </tr>
                          
                        </thead>
                        
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=> 
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
                                        <td>  
                                         <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Update</button>   
                                         </td>
                                        <td>  </td>
                                    </tr>
                                )
                            }

                        </tbody>
                      

                    </table>
            </div>
            


      </div>
    )
  }
}


