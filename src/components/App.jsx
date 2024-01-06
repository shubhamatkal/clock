import React from "react";

function App() {
  // function sayHi() {
  //   console.log("Hey");
  // }
  setInterval(gettime, 1000);

  let time = new Date().toLocaleTimeString();
  const [time_, settime] = React.useState(time);
  function gettime() {
    const newTime = new Date().toLocaleTimeString();
    settime(newTime);
  }
  const headingStyle = {
    color: "#D5F0C1", // Replace 'red' with your desired color
  };

  return (
    <div className="container">
      <h1 style={headingStyle}>CLOCK</h1>
      <br />
      <h1>{time_}</h1>
      <button id="mybutton" Click={gettime}>
        Get Time
      </button>
    </div>
  );
}

export default App;
