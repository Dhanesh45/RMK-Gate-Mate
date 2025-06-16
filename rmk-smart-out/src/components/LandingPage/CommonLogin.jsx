import LandingPagebg from "../../assets/LandingPageimg/landbg.jpg"
import rmklogo from "../../assets/LandingPageimg/rmklogo.png"

const CommonLogin = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingPagebg})`,
        backgroundSize: "cover",       
        height: "100vh",
        width: "100vw",
        margin:0,padding:0,display:'flex',justifyContent:"center",alignItems:"center"
      }}
    >
      <div style={{width:"90%",height:"80vh",backgroundColor:" rgba(255, 255, 255, 0.5)",}}>
        
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <img src={rmklogo} width="15%" style={{padding:"1%"}}/>
            <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"30px",fontWeight:"bolder",padding:"2%"}}>INFORMATION TECHNOLOGY</h1>
          </div>
          <div>
            <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"30px",fontWeight:"bolder",padding:"2% 0%",textAlign:"center"}}>ARE YOU A?</h1>
          </div>
          <div style={{textAlign:"center",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"30%",padding:"0% 20% 0% 20%"}}>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>STUDENT</button>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>COUNSELLOR</button>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>HOD</button>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>PRINCIPAL</button>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>YEAR COORDINATOR</button>
            <button style={{padding:"4% 3% 4% 3%",fontSize:"15px",fontWeight:"bold",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"22px"}}>OFFICE ASSISTANT</button>
          </div>
        </div>
      
    </div>
  );
};

export default CommonLogin;
