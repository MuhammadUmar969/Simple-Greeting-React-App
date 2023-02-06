import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   //<App />
  
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';
const greetStyle = { };

if(currDate >=1 && currDate <12){
  greetings = 'Good Morning';
  greetStyle.color = 'green';
}else if(currDate >=12 && currDate <19){
  greetings = 'Good Afternoon';
  greetStyle.color = 'orange';
}else{
  greetings = ' Good Night';
  greetStyle.color = 'blue';
}

ReactDOM.render(
  <>
  <div>
 <h1>Hello Sir, <span style={greetStyle}> { greetings} </span> </h1>
 </div>
 </>,
  document.getElementById('root')
);
