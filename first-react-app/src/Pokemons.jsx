
function Pokemon() {

  let pokemon1 = "Picachu";

  return(
    <ol>
      <li> {pokemon1.replace("c", "k")} </li>
      <li>Arecus</li>
      <li>a date is in here for some reason {new Date().toUTCString()} </li>
      <li>Blazekan</li>
      <li>some important text</li>
    </ol>
  );

}

export default Pokemon