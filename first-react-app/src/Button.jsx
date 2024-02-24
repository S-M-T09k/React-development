import PropTypes from 'prop-types';

function Button(props) {

  // const styles = {
  //   backgroundColor: '#222222',
  //   color: '#00dd00',
  //   margin: 'auto',
  //   padding: '1rem 2rem',
  //   fontSize: 'larger',
  //   border: '#00e000 none',
  //   borderRadius: '10px',
  //   cursor: 'pointer',
  // };

  const newStyle = {
    borderRadius: '4px',
    backgroundColor: '#5ca1e1',
    border: 'none',
    color: '#fff',
    textAlign: 'center',
    fontsize: '32px',
    padding: '16px',
    width: '220px',
    transition: 'all 0.5s',
    cursor: 'pointer',
    margin: '36px',
    boxShadow: `0 10px 20px -8px rgba(0, 0, 0,.7)`,
  };

  const clickHandler = (e) => {
    console.log("object click");
    // console.log(e);
    e.target.innerText = (e.target.innerText == "Hello") ? "What's up?" : "Hello";
    // e.target.style.display = "none"; //?this works for some reason
    // console.log(e.target.backgroundColor);
  };

  return (

    <div className="container centerDiv">
      <button className='myButton' style={newStyle} onClick={clickHandler}>{props.value}</button>
    </div>

  );

}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button