/**
 Home page
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './Employees.css';
import cx from "classnames";
import {Link} from "@material-ui/core";


export default function Employees({ params, _employees, addEmpoyee, fetch }) {
  const [showDelete, setShowDelete] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [appInitialized, setAppInitialized] = useState(0);
  const [employees, setEmployees] = useState(_employees);
  // add employee inputs
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");



  const toggleShowEmployee = () => {
    setShowAddEmployee(!showAddEmployee);

    if(!showAddEmployee) {
      let employeesClone = employees;
      employeesClone.unshift({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        addEmployee: true
      });
      setEmployees(employeesClone);
    } else {
      if(appInitialized < 2) {
        let employeesClone = employees;
        delete employeesClone[0];
        setEmployees(employeesClone);
      } else {
        setAppInitialized(appInitialized + 1);
      }
    }
  };

  const addEmployee = async () => {
    // make a mutation and send the employee info to the backend
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: `
              mutation {
                createEmployee(
                  email: "${employeeEmail}",
                  firstName: "${employeeFirstName}",
                  lastName: "${employeeLastName}",
                  department: "${employeeDepartment}") {
                  firstName
                }
              }
            `,
      }),
    });
    const { data } = await resp.json();

    setEmployees(employees.concat({
      firstName: employeeFirstName,
      lastName: employeeLastName,
      email: employeeEmail,
      department: employeeDepartment,
      addEmployee: false
    }));

  };

  const filter = (key, filter) => {
    if(filter.length > 0) {
      var filteredEmployees = _employees.filter(employee => employee[key].toLowerCase().includes(filter.toLowerCase()));
      setEmployees(filteredEmployees)
    } else {
      setEmployees(_employees);
    }
  };

  useStyles(s);
  return (
    <>
      <div id="root" className={s.root}>

        <button
          data-toggle="modal" data-target="#exampleModal"
          onClick={() => setShowDelete(!showDelete)}
          className={cx("btn btn-dark btn-sm", s.tableToggles)}>
          {showDelete ? ("Hide"): ("Show")} Delete
        </button>
        <button
          data-toggle="modal" data-target="#exampleModal"
          onClick={() => setShowFilters(!showFilters)}
          className={cx("btn btn-dark btn-sm", s.tableToggles)}>
          {showFilters ? ("Hide"): ("Show")} Filters
        </button>
        <button
          data-toggle="modal" data-target="#exampleModal"
          onClick={() => setShowEditEmployee(!showEditEmployee)}
          className={cx("btn btn-dark btn-sm", s.tableToggles)}>
          {showEditEmployee ? ("Hide"): ("")} Edit Employees
        </button>
        <button
          data-toggle="modal" data-target="#exampleModal"
          onClick={() => toggleShowEmployee()}
          className={cx("btn btn-dark btn-sm", s.tableToggles)}>
          {showAddEmployee ? ("Hide Add"): ("Add")} Employee
        </button>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            {showDelete ? (<th>Action</th>) : showAddEmployee ? (<th><small>Add Employee</small></th>): (null)}

          </tr>
          { showFilters ? (
            <tr>
              <th>
                <input onChange={e => filter('firstName', e.target.value)} type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input onChange={e => filter('lastName', e.target.value)} type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input onChange={e => filter('email', e.target.value)} type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input onChange={e => filter('department', e.target.value)} type="text" className="form-control" placeholder="filter"/>
              </th>
              {showDelete ? (<th></th>) : showAddEmployee ? (<th></th>): (null)}
              {}
            </tr>
            ) : (null)
          }
          </thead>
          <tbody>

          {
            employees.map(employee => {

              if(!employee.addEmployee) {
                return (
                  <tr onClick={() => {
                    window.location.replace(`/employees/${employee._id}`)
                  }} className={s.tr}>
                    <td>{showEditEmployee ? (<input type="text" className="form-control" placeholder="First name" value={employee.firstName}/>) : (employee.firstName)}</td>
                    <td>{showEditEmployee ? (<input type="text" className="form-control" placeholder="First name" value={employee.lastName}/>) : (employee.lastName)}</td>
                    <td>{showEditEmployee ? (<input type="text" className="form-control" placeholder="First name" value={employee.email}/>) : (employee.email)}</td>
                    <td>{showEditEmployee ? (<input type="text" className="form-control" placeholder="First name" value={employee.department}/>) : (employee.department)}</td>
                    {
                      showDelete ?
                        (<td><button className={cx("btn btn-danger btn-sm", s.removeEmployeeButton)}>x</button></td>)
                        : showAddEmployee ?
                        (<td></td>)
                        :
                        (null)
                    }
                  </tr>
                  )
              } else {
                return (
                  <tr className={s.tr}>
                    <td>
                      <input onChange={e => setEmployeeFirstName(e.target.value)} value={employeeFirstName}  type="text" className="form-control" placeholder="First name"/>
                    </td>
                    <td>
                      <input  onChange={e => setEmployeeLastName(e.target.value)} value={employeeLastName}  type="text" className="form-control" placeholder="Last name"/>
                    </td>
                    <td>
                      <input onChange={e => setEmployeeEmail(e.target.value)} value={employeeEmail} type="text" className="form-control" placeholder="Email"/>
                    </td>
                    <td>
                      <input onChange={e => setEmployeeDepartment(e.target.value)} value={employeeDepartment}  type="text" className="form-control" placeholder="Department"/>
                    </td>
                    <td>
                      {showAddEmployee ? (<button onClick={() => addEmployee()} className={cx("btn btn-success btn-sm", s.removeEmployeeButton)}>+</button>) : (null)}
                    </td>
                  </tr>
                )
              }

            })
          }
          </tbody>
        </table>

      </div>
    </>
  );
}

Employees.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
