import { createStore } from 'redux';

// action types
const SET_USERS = 'GET_USERS';

// action creators
export const setUsers = users => ({
  type: SET_USERS,
  users,
});

// selectors
export const getUsers = state => state.users;

const initialState = {
  users: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

const userStore = createStore(userReducer, initialState);

export default userStore;
