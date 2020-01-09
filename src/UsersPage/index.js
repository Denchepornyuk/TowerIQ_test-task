import { connect } from 'react-redux';
import { setUsers, getUsers } from '../store/store';

import UsersPage from './UsersPage';

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps, { setUsers })(UsersPage);
