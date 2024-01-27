import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Pokemon from "./Pokemons.jsx";
import Button from './Button.jsx';
import Student from './Student.jsx'
import Test from './Test.jsx';

function App() {
  return (

    <>
      <Header></Header>
      <Card></Card>
      <Pokemon></Pokemon>
      <Button></Button>
      <Student name="Mike" age={5} isStudent={false}></Student>
      <Student name="Melisa" age={10} isStudent={true}></Student>
      <Student name={"Traisa"} age={14} isStudent={true}></Student>
      <Student age={5} isStudent={true}></Student>
      <Test something={false}></Test>
      <Footer></Footer>
    </>

  );
}

export default App
