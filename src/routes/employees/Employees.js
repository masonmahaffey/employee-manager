/**
 Home page
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './Employees.css';
import cx from "classnames";
import {Link} from "@material-ui/core";


export default function Employees({ params, _employees }) {
  const [showDelete, setShowDelete] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [appInitialized, setAppInitialized] = useState(0);
  const [employees, setEmployees] = useState(_employees);


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
                <input type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input type="text" className="form-control" placeholder="filter"/>
              </th>
              <th>
                <input type="text" className="form-control" placeholder="filter"/>
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
                      <input type="text" className="form-control" placeholder="First name"/>
                    </td>
                    <td>
                      <input type="text" className="form-control" placeholder="Last name"/>
                    </td>
                    <td>
                      <input type="text" className="form-control" placeholder="Email"/>
                    </td>
                    <td>
                      <input type="text" className="form-control" placeholder="Department"/>
                    </td>
                    <td>
                      {showAddEmployee ? (<button className={cx("btn btn-success btn-sm", s.removeEmployeeButton)}>+</button>) : (null)}
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
