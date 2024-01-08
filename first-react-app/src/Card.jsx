import profilePicture from './assets/6.jpg'

function Card() {
  
  return (

    <div className="card">
      <img className='card-image' src={profilePicture} alt="user image"/>
      <h2 className='card-title'>S.M.T 09k</h2>
      <p className='card-text'>
        in high school and depressed af, programming to get over it <br />
        like games, anime, magic, cubing, and programming obviously
      </p>
    </div>

  );

}

export default Card;