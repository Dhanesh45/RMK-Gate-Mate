import { BiBarChartSquare ,BiSolidUserDetail } from "react-icons/bi";
import { MdSpaceDashboard ,MdOutlineAppRegistration } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import rmklogo from "../../assets/LandingPageimg/rmklogo.png"

const Sidebar = () => {
  const sidebarContents=[
    {icon:<MdSpaceDashboard/>,name:"DASHBOARD"},
    {icon:<BiSolidUserDetail/>,name:"STUDENTS DETAILS"},
    {icon:<MdOutlineAppRegistration/>,name:"APPROAL LIST"},
    {icon:<BiBarChartSquare/>,name:"VERDICTS"},
    {icon:<BsListCheck />,name:"ATTENDANCE"},
  ]

  

  return (
    <div style={{width:"15%",height:"100vh",border:"1px solid black",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"0% 15px 15px 0%",backgroundColor:"white"}}>
      <div>
        <div>
        <h3 style={{padding:"5% 0% 10% 5%"}}>COUNSELLOR</h3>
        </div>
        {
          sidebarContents.map((content)=>{
            return(
              <ul style={{display:"flex",gap:"5px",listStyle:"none",padding:"5%",marginLeft:"5%"}}>
                <li style={{}}>{content.icon}</li>
                <li style={{fontSize:"90%",fontWeight:"bold"}}>{content.name}</li>
              </ul>
          )})
        }
      </div>
      <div>
        <div style={{padding:"5% 0% 5% 5%",display:'flex',gap:"10px"}}>
          <img src={rmklogo} alt="" style={{width:"25%",height:"25%",borderRadius:'50%'}}/> 
          <h5>COUNSELLOR</h5>
        </div>
        <button style={{margin:"10%",width:"80%",border:"none",backgroundColor:"green",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%'}}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
  )
}

export default Sidebar