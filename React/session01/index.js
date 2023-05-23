  // Add the code here
'use strict';

function ClickButton() {

  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return React.createElement('h1', { className: "text" }, 'Hello World!');
  }

  return React.createElement(
    'button', {
    className: "main-button",
    onClick: () => setClick(true)
  },
    'Press Here'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);