import RmkLogo from '../../../assets/LandingPageimg/rmklogo.png'
import DashPhoto from "../../../assets/HodLoginimg/Greenforest.jpg"
import ProfilePhoto from "../../../assets/HodLoginimg/profile.png"
import AttendanceChart from "./AttendanceChart"
import OutpassChart from "./OutpassChart"

const HodDashboard = () => {

    return ( 
            <div style={{ width: "85%", height: "100vh", backgroundColor: "rgba(238, 238, 238, 0.5)" }}>
                {/* header */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src={RmkLogo} alt="rmklogo" width="9%" height="9%" style={{ padding: "0.5%" }}></img>
                    <h1 style={{ padding: "1% 1% 0% 0%", color: "rgba(14, 73, 71, 1)", fontSize: "15px", fontWeight: "bolder" }}>INFORMATION TECHNOLOGY</h1>
                </div>
                {/* Hod profile */}
                <div style={{ width: "100%", height: "48%", justifyItems: "center" }}>
                    <div style={{ width: "95%", height: "100%", backgroundColor: "white", borderRadius: "20px", position: "relative" }}>
                        <div style={{ width: "100%", height: "45%" }}>
                            <img src={DashPhoto} alt="dashphoto" style={{ borderRadius: "20px", width: "100%", height: "100%" }} ></img>
                        </div>
                        <div style={{ width: "10%", height: "35%", position: "absolute", left: "7%", top: "24%",  }}>
                            <img src={ProfilePhoto} alt="profilephoto" style={{ width: "100%", height: "100%", borderRadius: "50%", border: "7px solid white" }}></img>
                        </div>
                        <div style={{ width: "100%", height: "54%", padding: "4% 0% 0% 7%" }}>
                            <h1 style={{ paddingBottom: "1%", fontSize: "25px", fontWeight: "bold" }}>HOD NAME</h1>
                            <p style={{ paddingBottom: "2.5%", fontSize: "15px", color: "gray" }}>hod@gmail.com</p>
                            <p style={{ fontSize: "15px", fontWeight: "600" }}> Number of Students: 121   |   Degree : B.Tech - Information Technology  |   College :R.M.K. Group of Institutions</p>
                        </div>
                    </div>
                </div>
                {/* charts */}
                <div style={{ width: "100%", height: "42%", display: "flex", justifyContent: "space-between", padding: "2% 2.5% 2% 2.5%" }}>
                    <div style={{ width: "42.5%", height: "97%", backgroundColor: "white", borderRadius: "20px" }}>
                        <h4 style={{padding:"2% 0% 0% 2%",fontWeight:"bold"}}>ATTENDANCE</h4>
                        <AttendanceChart />
                    </div>
                    <div style={{ width: "55%", height: "97%", backgroundColor: "white", borderRadius: "20px", }}>
                        <h4 style={{padding:"2% 0% 0% 2%",fontWeight:"bold"}}>OUTPASS TRACKER</h4>
                        <OutpassChart />
                    </div>
                </div>
            </div>
    )
}
export default HodDashboard