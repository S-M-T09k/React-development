import propTypes from 'prop-types';

const UserGreeting = (props) => {
  return(
    props.isLoggedIn ? <h2>Hello {props.userName}</h2> : <h2>Please login</h2>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  userName: propTypes.string,
}

export default UserGreeting;