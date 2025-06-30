import React from 'react'

import rmklogo from "../../../assets/LandingPageimg/rmklogo.png"
import dashphoto from "../../../assets/dashboardimg/Greenforest.jpg"
import profilephoto from "../../../assets/dashboardimg/Counsprofile.jpg"
import AttendanceChart from './AttendanceChart';
import Outpassbar from './Outpassbar';


const YearCoordinatorDashboard= () => {
   

  return (
    <div style={{display:"flex",height:"100vh",width:"100%"}}>
        <div className='side'></div>
        <div style={{width:"85%",height:"100%",backgroundColor:"rgba(238, 238, 238, 0.5)",}}>
            {/* Header */}
            <div style={{display:"flex",justifyContent:"space-between",}}>
                <img src={rmklogo} width="9%" height="9%" style={{padding:"0.5%",}}/>
                <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"15px",fontWeight:"bolder",padding:"1% 1% 0% 0%",}}>INFORMATION TECHNOLOGY</h1>
            </div>

            {/* Profile of Counsellor */}
            <div style={{justifyItems:"center",width:"100%",height:"50%"}}>
                <div style={{width:"94%",height:"100%",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
                    <div style={{width:"100%",height:"45%"}}>
                        <img src={dashphoto} alt=""  style={{width:"100%",height:"100%",borderRadius:"20px 20px 20px 20px"}}/>
                    </div>
                    <div style={{position:"absolute",width:"10%",height:"35%",top:"20%",left:"10%"}}>
                        <img src={profilephoto} alt="" style={{width:"100%",height:"100%",borderRadius:"50%",border:"10px solid white"}}/>
                    </div>
                    <div style={{width:"100%",height:"50%",padding:"5% 0% 0% 8%"}}>
                        <h1 style={{paddingBottom:"0.75%",fontSize:"25px",fontWeight:"550"}}>YEAR CO ORDINATOR NAME</h1>
                        <p  style={{paddingBottom:"0.75%",fontSize:"15px",color:"gray"}}>YR CO@gmail.com</p>
                        <b><p  style={{paddingBottom:"0.75%",fontSize:"15px"}}>Number of Students: 125   |   Degree : B.Tech - Information Technology  |   College :R.M.K. Group of Institutions</p>
                   </b> </div>
                </div>
            </div>

            {/* Visulaization */}
            <div style={{width:"100%",height:"35%",display:"flex",justifyContent:"space-between"}}>
                <div style={{backgroundColor:"white",borderRadius:"20px",width:"65.5%",height:"95%",margin:"2% 0% 1% 3.5%"}}>
                    <h4 style={{padding:"1% 0% 0% 3%"}}>OUTPASS TRACKER</h4>
                    <Outpassbar />
                </div>
                <div style={{backgroundColor:"white",borderRadius:"20px",width:"25%",height:"95%",margin:"2% 3.5% 1% 0%",}}>
                    <h4 style={{padding:"5% 0% 0% 5%"}}>ATTENDANCE</h4>
                    <AttendanceChart />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default YearCoordinatorDashboard;