import { BiBarChartSquare  } from "react-icons/bi";
import { MdSpaceDashboard ,MdOutlineAppRegistration } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const YearCoSidebar = ({setActivePage}) => {

  const navigate = useNavigate();

  const sidebarContents=[
    {icon:<MdSpaceDashboard/>,name:"DASHBOARD"},
    {icon:<MdOutlineAppRegistration/>,name:"APPROVAL LIST"},
    {icon:<BiBarChartSquare/>,name:"VERDICTS"},
  ]
 return (
    <div style={{width:"15%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"0% 15px 15px 0%",backgroundColor:"white"}}>
      <div>
        <div className="flex justify-center items-center w-[100%] ">
        <h3 style={{padding:"5% 0% 10% 0%",fontWeight:"bold",fontSize:"20px",textAlign:"center"}}>YEAR COORDINATOR</h3>
        </div>
        <ul>
          {sidebarContents.map((content, index) => (
            <li
              key={index}
              className="flex gap-[3%] list-none p-[5%] hover:bg-[#0E4947] hover:text-white rounded cursor-pointer"
              onClick={() => setActivePage(content.name)}
            >
              <span className="pt-[1%] text-xl font-bold">{content.icon}</span>
              <span className="text-l font-bold">{content.name}</span>
            </li>
          ))}
        </ul>

      </div>
      <div>
        <div style={{padding:"5% 0% 0% 0%",display:'flex',gap:"4px",alignItems:"center",justifyContent:"center"}}>
          <div className="">
            <CgProfile className="w-7 h-7"/>
          </div> 
          <h5 className="text-xl font-bold">YEAR COORDINATOR</h5>
        </div>
        <button style={{margin:"10%",width:"80%",border:"none",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%',display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}} onClick={()=>navigate("/ComLogin")}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
  )
}

export default YearCoSidebar