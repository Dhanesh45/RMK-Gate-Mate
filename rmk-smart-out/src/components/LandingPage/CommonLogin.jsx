import { useNavigate } from "react-router-dom";
import LandingPagebg from "../../assets/LandingPageimg/landbg.jpg"
import rmklogo from "../../assets/LandingPageimg/rmklogo.png"

const CommonLogin = () => {
  const butStyle="px-4 py-3 text-[20px] font-bold text-white bg-[#0E4947] rounded-[25px] ";
  const navigate=useNavigate();
  return (
    <div
      className="w-screen h-screen m-0 p-0 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${LandingPagebg})` }}
    >
      <div className="w-[90%] h-[80vh] bg-[rgba(255,255,255,0.5)]">
        
          <div className="flex justify-between">
            <img src={rmklogo} width="15%" className="p-[1%]"/>
            <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"30px",fontWeight:"bolder",padding:"2%"}}>INFORMATION TECHNOLOGY</h1>
          </div>
          <div>
            <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"30px",fontWeight:"bolder",padding:"2% 0%",textAlign:"center"}}>ARE YOU A?</h1>
          </div>
          <div style={{textAlign:"center",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"30%",padding:"0% 20% 0% 20%"}}>
            
            <button onClick={()=>navigate("/StudentLoginPage")} className={butStyle}>STUDENT</button>
            <button onClick={()=>navigate("/CounsellorLoginPage")} className={butStyle}>COUNSELLOR</button>
            <button onClick={()=>navigate("/HodLoginPage")} className={butStyle}>HOD</button>
            <button onClick={()=>navigate("/HodLoginPage")} className={butStyle}>PRINCIPAL</button>
            <button onClick={()=>navigate("/YearCoordinatorLoginPage")} className={butStyle}>YEAR COORDINATOR</button>
            <button onClick={()=>navigate("/OfficeAssistantLoginPage")} className={butStyle}>OFFICE ASSISTANT</button>
          </div>
        </div>
      
    </div>
  );
};

export default CommonLogin;
