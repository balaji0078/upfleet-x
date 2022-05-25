import './App.css';
import Route from './routes';
import { Provider } from "react-redux";
import { store } from "./helpers/helper";

// import {
//   BrowserRouter,
//   Routes
// } from "react-router-dom";
// let favicon = document.getElementById("favicon");
// favicon.href = 'https://www.google.com/favicon.ico'
const root = document.documentElement;
console.log('root style', root.style)
const color= ['#01b5ea', '#01ea80', '#69ea01','#de59a8','#52d6e2', '#ea2e01', '#de7259']
root.style.setProperty('--background-theme', color[Math.floor(Math.random()*color.length)]);

function App() {
  console.log('app')
  return (
	<div className="App">
  <Provider store={store}>	
		<Route />   
   </Provider> 
	</div>
  );
}

export default App;
