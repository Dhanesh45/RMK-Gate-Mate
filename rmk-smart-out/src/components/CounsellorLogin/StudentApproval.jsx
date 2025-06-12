import React from 'react'
import rmklogo from "../../assets/LandingPageimg/rmklogo.png"


const StudentApproval = () => {
    const students=[
        {sno:1,regno:111723203001,name:"Akash",},
        {sno:2,regno:111723203002,name:"Abishek",},
        {sno:3,regno:111723203003,name:"Abinaya",},
        {sno:4,regno:111723203004,name:"Adithya Baba",},
        {sno:5,regno:111723203005,name:"Agila",},
        {sno:6,regno:111723203006,name:"Ajith Kumar",},
        {sno:7,regno:111723203007,name:"Anandhi",},
        {sno:8,regno:111723203008,name:"Anusuya",},
        {sno:9,regno:111723203009,name:"Arul Jothie",},
        {sno:10,regno:111723203010,name:"Bhavadharani",},
        {sno:11,regno:111723203011,name:"Bhuvaneswari K",},
        {sno:12,regno:111723203012,name:"Bhuvaneshwari S",},
        {sno:13,regno:111723203013,name:"Shruthi",},
        {sno:14,regno:111723203014,name:"Chendraya Saravanan",},
        {sno:15,regno:111723203015,name:"Vinishiya",},
        {sno:16,regno:111723203016,name:"Deepakraj",},
        {sno:17,regno:111723203017,name:"Deepika",},
        {sno:18,regno:111723203018,name:"Dega Dhanush",},
        {sno:19,regno:111723203019,name:"Deivanai",},
        {sno:20,regno:111723203020,name:"Devasri",},
        {sno:21,regno:111723203021,name:"Dhanesh",},
        {sno:22,regno:111723203022,name:"Dhanraj",},
        {sno:23,regno:111723203023,name:"Dharshini",},
        {sno:24,regno:111723203024,name:"Dhinesh",},
        {sno:25,regno:111723203025,name:"Divyadharshini",},
        {sno:26,regno:111723203026,name:"Ganesan",},
        {sno:27,regno:111723203027,name:"Ganga",},
        {sno:28,regno:111723203028,name:"Gnanesh",},
        {sno:29,regno:111723203029,name:"Gokul",},
        {sno:30,regno:111723203030,name:"Gowtham",},
        {sno:31,regno:111723203031,name:"Gracelin",},
        {sno:32,regno:111723203032,name:"Harini",},
        {sno:33,regno:111723203033,name:"Harirajan",},
        {sno:34,regno:111723203034,name:"Harish",},
        {sno:35,regno:111723203035,name:"Harishta",},
        {sno:36,regno:111723203036,name:"Harry Joel",},
        {sno:37,regno:111723203037,name:"Hemanth Kumar",},
        {sno:38,regno:111723203038,name:"Jagadish",},
        {sno:39,regno:111723203039,name:"Jaishree",},
        {sno:40,regno:111723203040,name:"Jaisurya",},
        {sno:41,regno:111723203121,name:"Ragul",},
        {sno:42,regno:111723203124,name:"Manoj",}
      ]

  return (
    <div style={{display:"flex"}}>
        <div style={{width:"15%",height:"100vh",border:"1px solid black"}}>

        </div>
        <div style={{width:"85%",height:"100vh",border:"1px solid red",backgroundColor:"rgba(238, 238, 238, 0.9333)"}}>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid black"}}>
                <img src={rmklogo} width="9%" height="9%" style={{padding:"0.5%",border:"1px solid black"}}/>
                <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"15px",fontWeight:"bolder",padding:"1.5% 0% 0% 0%",border:"1px solid black"}}>INFORMATION TECHNOLOGY</h1>
            </div>
            <div>
                 <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"20px",fontWeight:"bolder",textAlign:"center",border:"1px solid black"}}>STUDENT APPROVAL LIST</h1>
                <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(217, 217, 217, 1)", width: "80%", margin: "0 auto" }}>
                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <thead>
                            <tr style={{margin:"1%"}}>
                            <th style={{ padding: "4px", border: "1px solid black" }}>S.NO</th>
                            <th style={{ padding: "4px", border: "1px solid black" }}>NAME</th>
                            <th style={{ padding: "4px", border: "1px solid black" }}>REGISTER NUMBER</th>
                            <th style={{ padding: "4px", border: "1px solid black" }}>REMARK</th>
                            <th style={{ padding: "4px", border: "1px solid black" }}>VALIDATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                            <tr style={{backgroundColor:"white",margin:"10%"}} key={student.sno}>
                                <td style={{ padding: "10px",}}>{student.sno}</td>
                                <td style={{ padding: "10px",}}>{student.name}</td>
                                <td style={{ padding: "10px",}}>{student.regno}</td>
                                <td style={{ padding: "10px",}}><input /></td>
                                <td style={{ padding: "10px",}}><button>wrong</button><button>right</button></td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default StudentApproval