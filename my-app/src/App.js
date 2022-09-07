import logo from './logo.svg';
import './App.css';

function App() {

  const studentList = ['sharif', 'arif', 'jakaria'];
  return (
    <div className="App">


      <Myapp name={studentList[0]}></Myapp>
      <Myapp name={studentList[1]}></Myapp>
      <Myapp name={studentList[2]}></Myapp>


      <header className="App-header">  </header>


    </div>
  );
}

function Myapp(props) {

  const nayokStyle = {
    color: 'tomato',
    background: 'cyan',
    border: '2px solid purple',
    margin: '20px',

  }

  return <div style={nayokStyle} className="myStyle">
    <h2>My name is {props.name} </h2>
    <h4>I live in {props.home}</h4>

  </div>
}




export default App;
