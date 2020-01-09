import React, { useState } from 'react';
import PropsTypes from 'prop-types';
import { usersFromServer } from '../api/users';

import Users from './Users';
import Pagination from '../Pagination/Pagination';

const UsersPage = ({ users, setUsers }) => {
  const getUser = async() => {
    setUsers(await usersFromServer());
  };

  const [currentPage, changeCurrentPage] = useState(1);

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
        : (
          <>
            <Users
              usersData={users.users}
              currentPage={currentPage}
              perPage={5}
            />
            <Pagination
              total={users.users.length}
              currentPage={currentPage}
              perPage={5}
              changePage={changeCurrentPage}
            />
          </>
        )
      }
    </div>
  );
};

UsersPage.propTypes = {
  users: PropsTypes.objectOf.isRequired,
  setUsers: PropsTypes.func.isRequired,
};

export default UsersPage;
