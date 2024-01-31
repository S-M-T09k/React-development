import PropTypes from "prop-types";

const Test = (props) => {

  const something = props.something;

  if (something) {
    return(

      <span>This is for true</span>
      
    );
  }
  else{
    return(

      <span>This is for false</span>
      
    );
  }

}

Test.propTypes = {

  something: PropTypes.bool,

}

export default Test;