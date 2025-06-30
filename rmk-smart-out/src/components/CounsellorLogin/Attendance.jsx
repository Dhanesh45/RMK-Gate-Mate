import rmklogo from "../../assets/LandingPageimg/rmklogo.png";

const Attendance = () => {
  const students = [
    { id: 1, name: "AKASH", reg: "111723203001", year: "II–A" },
    { id: 2, name: "GOKUL", reg: "111723203001", year: "II–A" },
    { id: 3, name: "HARISH", reg: "111723203001", year: "II–A" },
    { id: 4, name: "DHANESH", reg: "111723203001", year: "II–A" },
    { id: 5, name: "DHANRAJ", reg: "111723203001", year: "II–A" },
    { id: 6, name: "DHINESH", reg: "111723203001", year: "II–A" },
    { id: 7, name: "AKASH", reg: "111723203001", year: "II–A" },
    { id: 8, name: "GOKUL", reg: "111723203001", year: "II–A" },
    { id: 9, name: "HARISH", reg: "111723203001", year: "II–A" },
    { id: 10, name: "DHANESH", reg: "111723203001", year: "II–A" },
    { id: 11, name: "DHANRAJ", reg: "111723203001", year: "II–A" }
  ];


  const thStyling ={
                  backgroundColor: "white",
                  padding: "1%",
                  fontWeight: "bold",
                  position: "sticky",
                  top: 0,
                  zIndex: 1
                }
  return (
    <div style={{ width: "85%", height: "100vh", backgroundColor: "rgba(238, 238, 238, 0.9333)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
        <img src={rmklogo} style={{ width: "9%", height: "9%", padding: "0.5%" }} />
        <h1 style={{ fontSize: "15px", padding: "1% 0 0 0", fontWeight: "bold", color: "#004d40", textAlign: "center" }}>
          INFORMATION TECHNOLOGY
        </h1>
      </div>

      <div>
        <h3 style={{ fontSize: "20px", textAlign: "center", color: "#004d40", paddingBottom: "2%",fontWeight:"bold" }}>
          STUDENT ATTENDANCE SYSTEM
        </h3>
      </div>

      <div style={{width:"100%",height:"79%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div
        style={{
          width: "90%",
          height: "100%",
          background: "rgba(217, 217, 217, 1)",
          borderRadius: "10px",
          padding: "0% 0.6% 0.7%",
          overflowX: "auto",
          overflowY: "auto",
          borderBottom: "9px solid rgba(217, 217, 217, 1)",
          borderTop: "9px solid rgba(217, 217, 217, 1)",
         
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyling}>SI</th>
              <th style={thStyling}>NAME</th>
              <th style={thStyling}>REG.NO</th>
              <th style={thStyling}>YEAR-SEC</th>
              <th style={thStyling}>ATTENDANCE ENTRY</th>
              
              
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: "white",
                  borderTop: "5px solid rgba(217, 217, 217, 1)"
                }}
              >
                <td style={{ padding: "1%", textAlign: "center" }}>{student.id}</td>
                <td style={{ padding: "1%", textAlign: "center" }}>{student.name}</td>
                <td style={{ padding: "1%", textAlign: "center" }}>{student.reg}</td>
                <td style={{ padding: "1%", textAlign: "center" }}>{student.year}</td>
                <td style={{ padding: "1%", textAlign: "center" }}>
                  <button
                    className="hover:bg-green-600"
                    style={{
                      backgroundColor: "rgba(14, 73, 71, 1)",
                      color: "white",
                      border: "none",
                      borderRadius: "7px",
                      padding: "6px 12px",
                      marginRight: "6%",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    PRESENT
                  </button>
                  <button
                    className="hover:bg-red-600"
                    style={{
                      backgroundColor: "rgba(197, 9, 12, 1)",
                      color: "white",
                      border: "none",
                      borderRadius: "7px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    ABSENT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Attendance;
