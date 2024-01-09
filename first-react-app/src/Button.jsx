
function Button() {

  const styles = {
    backgroundColor: '#222222',
    color: '#00dd00',
    margin: 'auto',
    padding: '1rem 2rem',
    fontSize: 'larger',
    border: '#00e000 none',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  
  return(

    <div className="container centerDiv">
      <input type="button" value="Click me and nothing happens" className="myButton" style={styles} />
    </div>

  );

}

export default Button