const user = {
    name: "Zoltán",
    age: 27,
    location: "Budapest"
  };

  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    } else {
      return undefined;
    }
  }

  let count = 0;
  const addOne = () => {
    count++;
    renderCounterApp();
  };

  const minusOne = () => {
    count--;
    renderCounterApp();
  }

  const setupReset = () => {
    count = 0;
    renderCounterApp();
  }



  const appRoot = document.getElementById("app");
  const renderCounterApp = () => {
    const templateTwo = (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={setupReset}>Reset</button>
      </div>
    );

    ReactDOM.render(templateTwo, appRoot);
  };

  renderCounterApp();
