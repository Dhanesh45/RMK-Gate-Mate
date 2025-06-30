import React from 'react'
import './StudentDashboard.css';
import dashphoto from '../../../assets/Dashboardimg/dhashimg1.jpg';
import profilephoto from '../../../assets/Dashboardimg/dashimg3.webp';
import STUsideBar from './StudentSideBar';
import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
const Dashboard = () => {
    return (
        <div className="maincontainer">
            <div style={{width:"15%",height:"100vh"}}></div>
            <div className="innercontent">
                <div className="head">
                    <img src={rmklogo} className='logoo' />
                    <h1 className="side">INFORMATION TECHNOLOGY</h1>
                </div>
                  <div style={{justifyItems:"center",width:"100%",height:"50%"}}>
                <div style={{width:"94%",height:"100%",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
                    <div style={{width:"100%",height:"45%"}}>
                        <img src={dashphoto} alt=""  style={{width:"100%",height:"100%",borderRadius:"20px 20px 20px 20px"}}/>
                    </div>
                    <div style={{position:"absolute",width:"10%",height:"35%",top:"20%",left:"10%"}}>
                        <img src={profilephoto} alt="" style={{width:"100%",height:"100%",borderRadius:"50%",border:"10px solid white",objectFit:"cover"}}/>
                    </div>
                    <div style={{width:"100%",height:"50%",padding:"5% 0% 0% 8%"}}>
                        <h1 style={{paddingBottom:"0.85%",fontSize:"25px",fontWeight:"550"}}>STUDENT NAME</h1>
                        <p  style={{paddingBottom:"0.95%",fontSize:"15px",color:"gray"}}>student@gmail.com</p>
                        <b><p  style={{paddingBottom:"0.5%",fontSize:"15px"}}>Number of Students: 125   |   Degree : B.Tech - Information Technology  |   College :R.M.K. Group of Institutions</p>
                   </b> </div>
                </div>
            </div>

                <div className="frame-row">
                    <div className="frame-box">
                        <p>PRINCIPAL</p>
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Principal" />
                        <strong>Dr. K.A. Mohamed Junaid</strong>
                    </div>
                    <div className="frame-box">
                        <p>HEAD OF DEPARTMENT</p>
                        <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="HOD" />
                        <strong>Dr. M. Sheerin Banu</strong>
                    </div>
                    <div className="frame-box">
                        <p>YEAR COORDINATOR</p>
                        <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Year Coordinator" />
                        <strong>Dr. A. Annalakshmi</strong>
                    </div>
                    <div className="frame-box">
                        <p>COUNSELLOR</p>
                        <img src="https://randomuser.me/api/portraits/women/48.jpg" alt="Counsellor" />
                        <strong>Dr. A. Annalakshmi</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

