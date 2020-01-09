import React from 'react';
import PropsTypes from 'prop-types';

const Person = ({ user }) => (
  <tr>
    {Object.keys(user).map(item => (
      <td>{user[item]}</td>
    ))}
  </tr>
);

Person.propTypes = { user: PropsTypes.objectOf.isRequired };

export default Person;
