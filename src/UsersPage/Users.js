import React from 'react';
import PropsTypes from 'prop-types';
import Person from './Person';

const Users = ({ usersData, perPage, currentPage }) => {
  const start = perPage * currentPage - (perPage - 1);
  const end = perPage * currentPage >= usersData.length
    ? usersData.length
    : perPage * currentPage;

  return (
    <table
      className="table"
    >
      <thead className="table__head">
        {Object.keys(usersData[0]).map(item => (
          <th>{item}</th>
        ))}
      </thead>
      <tbody className="table__body">
        {usersData.map((user, index) => (
          (index + 1 >= start && index + 1 <= end)
            ? <Person user={user} />
            : ''
        ))}
      </tbody>
    </table>
  );
};

Users.propTypes = {
  usersData: PropsTypes.arrayOf.isRequired,
  perPage: PropsTypes.number.isRequired,
  currentPage: PropsTypes.number.isRequired,
};

export default Users;
