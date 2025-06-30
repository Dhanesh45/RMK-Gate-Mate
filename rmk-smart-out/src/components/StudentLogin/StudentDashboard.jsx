import dashphoto from '../../assets/Dashboardimg/dhashimg1.jpg';
import profilephoto from '../../assets/Dashboardimg/dashimg3.webp';
import rmklogo from "../../assets/LandingPageimg/rmklogo.png";

const StudentDashboard = () => {
  return (
  
      <div style={{ width: "85%", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={rmklogo} alt="logo" style={{ width: "9%", height: "9%", padding: "0.5%" }} />
          <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "#004d40", padding: "1% 0%" }}>INFORMATION TECHNOLOGY</h1>
        </div>

        <div style={{ width: "100%", height: "50%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "94%", height: "100%", backgroundColor: "white", borderRadius: "20px", position: "relative" }}>
            <div style={{ width: "100%", height: "45%" }}>
              <img src={dashphoto} alt="dash" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
            </div>
            <div style={{ position: "absolute", width: "10%", height: "35%", top: "20%", left: "10%" }}>
              <img
                src={profilephoto}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "10px solid white",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ width: "100%", height: "50%", padding: "5% 0% 0% 8%" }}>
              <h1 style={{ paddingBottom: "0.85%", fontSize: "25px", fontWeight: "550" }}>STUDENT NAME</h1>
              <p style={{ paddingBottom: "0.95%", fontSize: "15px", color: "gray" }}>student@gmail.com</p>
              <b>
                <p style={{ paddingBottom: "0.5%", fontSize: "15px" }}>
                  Number of Students: 125 | Degree : B.Tech - Information Technology | College : R.M.K. Group of Institutions
                </p>
              </b>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            gap: "4%",
            padding: "4.1%",
            width: "100%",
            height: "40%",
          }}
        >
          {[
            {
              role: "PRINCIPAL",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
              name: "Dr. K.A. Mohamed Junaid",
            },
            {
              role: "HEAD OF DEPARTMENT",
              img: "https://randomuser.me/api/portraits/women/46.jpg",
              name: "Dr. M. Sheerin Banu",
            },
            {
              role: "YEAR COORDINATOR",
              img: "https://randomuser.me/api/portraits/women/47.jpg",
              name: "Dr. A. Annalakshmi",
            },
            {
              role: "COUNSELLOR",
              img: "https://randomuser.me/api/portraits/women/48.jpg",
              name: "Dr. A. Annalakshmi",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="hover:shadow-xl transition-shadow duration-200"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "18px",
                width: "22%",
                height:"85%",
                textAlign: "center",
                padding: "1.5%",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.236)",
              }}
            >
              <p style={{ paddingTop: "2%", fontSize: "15px", color: "#000", fontWeight: "700" }}>{item.role}</p>
              <img
                src={item.img}
                alt={item.role}
                style={{ width: "65px", height: "65px", padding: "4.3%", borderRadius: "50%" }}
              />
              <strong style={{ color: "#000", fontSize: "13px" }}>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
  );
};

export default StudentDashboard;
