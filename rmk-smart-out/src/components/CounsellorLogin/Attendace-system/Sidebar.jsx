import { BiBarChartSquare, BiSolidUserDetail } from "react-icons/bi";
import { MdSpaceDashboard, MdOutlineAppRegistration } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
import { useState } from "react";
import styled from 'styled-components';

const Sidebar = () => {
    const sidebarContents = [
        { icon: <MdSpaceDashboard />, name: "DASHBOARD" },
        { icon: <BiSolidUserDetail />, name: "STUDENTS DETAILS" },
        { icon: <MdOutlineAppRegistration />, name: "APPROAL LIST" },
        { icon: <BiBarChartSquare />, name: "VERDICTS" },
        { icon: <BsListCheck />, name: "ATTENDANCE" },
    ]

    const HoverLi = styled.li`
    display:flex;
    gap:5px;
    list-style:none;
    padding:5%;
    &:hover{
      background-color:rgba(14, 73, 71, 1);
      color:white;
    }
  }
`;
    const [click, setClick] = useState(false);
    return (
        <div style={{ width: "15%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: "0% 15px 15px 0%", backgroundColor: "white" }}>
            <div>
                <div>
                    <h3 style={{ padding: "5% 0% 10% 5%" }}>COUNSELLOR</h3>
                </div>
                <ul style={{}}>
                    {
                        sidebarContents.map((content) => {
                            return (
                                <HoverLi>
                                    <li style={{}}>{content.icon}</li>
                                    <li style={{ fontSize: "90%", fontWeight: "bold" }}>{content.name}</li>
                                </HoverLi>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <div style={{ padding: "5% 0% 0% 0%", display: 'flex', gap: "4px", alignItems: "center", justifyContent: "center" }}>
                    <div>
                        <CgProfile />
                    </div>
                    <h5>COUNSELLOR</h5>
                </div>
                <button style={{ margin: "10%", width: "80%", border: "none", backgroundColor: "rgba(14, 73, 71, 1)", color: "white", borderRadius: "20px", fontSize: '15px', fontWeight: "bold", padding: '2%', display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <IoIosLogOut />
                    LOGOUT
                </button>
            </div>
        </div>
    )
}

export default Sidebar