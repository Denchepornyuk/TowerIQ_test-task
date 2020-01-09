import { connect } from 'react-redux';
import { getUsers, setUsers } from '../store/store';

import UsersPage from './UsersPage';

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps, { setUsers })(UsersPage);
