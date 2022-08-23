import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const person = { name: 'joumana', age: 19 }
  const link ="http://www.google.com"
  return (
    <div className="App">
      <Navbar/>
     
      <div className="content">
        <Home/> 

        </div> 
       
       {/* <h1> {title}</h1>
        <p> Liked {likes} times</p>
        <p>{person}</p>
        <p>{10}</p>
        <p> {'Hello ninjas'}</p>
        <p> {[1, 2, 3, 4, 5]}</p>
        <p> {Math.random()*10}</p>

        <a href={link}>Google site</a>*/}
    
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    
    </div>
  );
}

export default App;
