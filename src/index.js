import React from 'react';
import ReactDOM from 'react-dom/client';
// var ReactDOM  = require("react-dom") 
// import App from './App';
 let cssstyle = {}
var cartime = new Date().getHours();
// cartime = cartime.getHours();
var grriting = "";
const root = ReactDOM.createRoot(document.getElementById('root'));

if (cartime >= 1 && cartime < 12) {
  grriting = "good moring";
  cssstyle.color = "green"
} else if (cartime >= 12 && cartime < 19){
  grriting = "good afternoon";
  cssstyle.color = "red"

}else{
  grriting = "good night";
  cssstyle.color = "black"


}
root.render(
  <React.StrictMode>
    <h2>hello sir <span style={cssstyle}>{grriting}</span></h2>
    {/* <App /> */}
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"))
 
 