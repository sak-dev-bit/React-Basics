import './App.css';
//import logo from './logo.svg';
//import FirstComponent from './Assignment1/Component';
// import WithProps from './Assignment2/Component';
import TourismWebapp from './Assignment3/Component3';


function App() {
  // const Employee=[
  //   {empId: "101", empname: "Ram", empcity: "Pune", number: "123467545", website: "ram.com"},
  //   {empId: "102", empname: "Shyam", empcity: "Mumbai", number: "987654321", website: "shyam.net"},
  //   {empId: "103", empname: "Asha", empcity: "Delhi", number: "456789123", website: "asha.org"},
  //   {empId: "104", empname: "Priya", empcity: "Bangalore", number: "789123456", website: "priya.in"},
  //   {empId: "105", empname: "Raj", empcity: "Chennai", number: "321654987", website: "raj.com"}
  // ]
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> }
      <FirstComponent/>
      <WithProps emparr={Employee}></WithProps>*/}
      <TourismWebapp/>


    </div>
  );
}

export default App;
