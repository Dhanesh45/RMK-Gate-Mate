import React from 'react'
import './Dashboard.css';
import STUsideBar from './STUsideBar';
import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
const Dashboard = () => {
    return (
        <div className="maincontainer">
            <STUsideBar />
            <div className="innercontent">
                <div className="head">
                    <img src={rmklogo} className='logoo' />
                    <h1 className="side">INFORMATION TECHNOLOGY</h1>
                </div>
                <div className="profile-card">
                    <img
                        className="cover-img"
                        src="https://img.freepik.com/free-vector/mountain-landscape-with-pine-trees_1308-120845.jpg"
                        alt="cover"
                    />
                    <img
                        className="profile-pic"
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="student"
                    />
                    <h3>Student Name</h3>
                    <h9>alexarawles@gmail.com</h9>
                    <p>
                        Register Number :111723203000 | Degree :B.Tech - Information Technology | Batch
                        :2027 | College :R.M.K. Group of Institutions
                    </p>
                </div>

                <div className="frame-section">
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
                            <strong>Dr. M. Sheerin Banu</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

