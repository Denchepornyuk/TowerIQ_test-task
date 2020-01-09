import React from 'react';
import PropTypes from 'prop-types';
import { usersFromServer } from '../api/users';

import Users from './Users';

const UsersPage = ({ users, setUsers }) => {
  const getUser = async() => {
    setUsers(await usersFromServer());
  };

  return (
    <div>
      {users.length === 0
        ? (
          <button
            type="button"
            onClick={getUser}
          >
            Load Users
          </button>
        )
        : <Users usersData={users.users} />
      }
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.objectOf.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default UsersPage;
