/**
 Home page
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Employee.css';
import cx from "classnames";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default function Employee({ employee }) {

  const data = [
    {
      name: 'Jan 3', PositiveRemarks: 1, NegativeRemarks: 2, amt: 2400,
    },
    {
      name: 'Jan 4', PositiveRemarks: 0, NegativeRemarks: 3, amt: 2210,
    },
    {
      name: 'Jan 5', PositiveRemarks: 2, NegativeRemarks: 0, amt: 2290,
    },
    {
      name: 'Jan 6', PositiveRemarks: 0, NegativeRemarks: 5, amt: 2000,
    },
    {
      name: 'Jan 7', PositiveRemarks: 1, NegativeRemarks: 2, amt: 2181,
    },
    {
      name: 'Jan 8', PositiveRemarks: 2, NegativeRemarks: 0, amt: 2500,
    },
    {
      name: 'Jan 9', PositiveRemarks: 4, NegativeRemarks: 1, amt: 2100,
    },
  ];

  useStyles(s);
  return (
    <div className={s.root}>
      {/*<h1>{"hello" + params.id}</h1>*/}

      <p className={cx("", s.removeEmployeeButton)}>
        <i onClick={() => {window.location.replace("/employees")}} className={`fa   fa-long-arrow-left ${s.backToEmployeesButtonArrow}`}></i>
      </p>

      <div className="container">
        <div className="row" style={{marginTop: "50px"}}>
          <div className={`col`}>
            <img style={{borderRadius: "50%"}} src="https://randomuser.me/api/portraits/men/71.jpg" />
          </div>
          <div className={`col`}>
            <h3 className={s.employeeDetail}>{employee.firstName} {employee.lastName}</h3>
          </div>
          <div className={`col`}></div>

          <div className={`col`}>
            {/*<h4 className={s.employeeDetail}>The Hub</h4>*/}
            <div className={s.chartWrapper}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PositiveRemarks" stroke="#007bff" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="NegativeRemarks" stroke="#dc3545" />
              </LineChart>
            </div>

          </div>
        </div>

        <div className={"row"} style={{marginTop: '100px'}}>
          <div className={"col"}>
            <button className={cx("btn btn-danger btn-sm", s.addRemarkBtn)}>+ Add Remark</button>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Date</th>
                  <th>Remark</th>
                  <th>Negative/Positive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jan 1st, 2020</td>
                  <td>Need to improve x, y, z</td>
                  <td>Negative</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
}

Employee.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};
