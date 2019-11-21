console.log('App.js is running!');

var appRoot = document.getElementById("app")

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["one", "two"]
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:": "No options!"}</p>
    <ol>
      <li>Item one</li>
      <li>Item one</li>
    </ol>
  </div>
);

var user = {
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

var currentYear = 2019;

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymus'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

ReactDOM.render(template, appRoot);