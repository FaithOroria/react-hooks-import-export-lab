import React from "react";

const username = "YourUsername"; 
const city = "YourCity"; 


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;