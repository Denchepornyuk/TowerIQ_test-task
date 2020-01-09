import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

const Users = ({ usersData }) => (
  <table border={1}>
    <thead>
      {Object.keys(usersData[0]).map(item => (
        <th>{item}</th>
      ))}
    </thead>
    <tbody>
      {usersData.map(user => (
        <Person user={user} />
      ))}
    </tbody>
  </table>
);

Users.propTypes = { usersData: PropTypes.arrayOf.isRequired };

export default Users;
