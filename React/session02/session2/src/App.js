import './App.css';

const h1Style = { 
  "fontSize":"30px",
  "color": "#cc0000",
  "textTransform": "uppercase"
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={ h1Style }>My React Page</h1>
        <h2 className='bio'>This is my first react page</h2>
      </header>
    </div>
  );
}

export default App;
