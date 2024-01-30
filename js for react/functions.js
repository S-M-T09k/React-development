function doSomething() {
  console.log("this is a normal function");
};

const doSomethingElse = () => {
  console.log(`this is a "better" way to write it in callback functions and react components`);
};

() => {
  console.log("this is anonymous and there's no way for this be called");
};

doSomething();
doSomethingElse();

//*example code
const Button = () => {
  return(

    <button onclick={doSomething}>
      Hello!
    </button>

  );
};

export default Button;