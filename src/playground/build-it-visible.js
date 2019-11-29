const appRoot = document.getElementById('app');

const app = {
  visible: false
}

const visibilityToggle = () => {
  app.visible = !app.visible;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visbility Toggle</h1>
      <button onClick = {visibilityToggle}>{app.visible ? "Hide details" : "Show details"}</button>
      {app.visible ? 
        <div>
          <p>Some details to hide.</p>
        </div> : undefined}
    </div>
  );
  ReactDOM.render(template, appRoot)
}

render();