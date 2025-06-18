import React from 'react'
import LandingPagebg from "../../assets/LandingPageimg/landbg.jpg"

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingPagebg})`,
        backgroundSize: "cover",         // ensures full image is visible
            // no tiling
             // centered
        height: "100vh",
        width: "100vw",
        margin:0,padding:0
      }}
    >
      <div style={{width:"80%",height:"70vh",backgroundColor:"white"}}>
        
      </div>
    </div>
  );
};

export default LandingPage;
