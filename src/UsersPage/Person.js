import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ user }) => (
  <tr>
    {Object.keys(user).map(item => (
      <td>{user[item]}</td>
    ))}
  </tr>
);

Person.propTypes = { user: PropTypes.objectOf.isRequired };

export default Person;
