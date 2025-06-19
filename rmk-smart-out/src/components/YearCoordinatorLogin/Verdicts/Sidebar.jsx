import { BiBarChartSquare ,BiSolidUserDetail } from "react-icons/bi";
import { MdSpaceDashboard ,MdOutlineAppRegistration } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import styled from 'styled-components';

const Sidebar = () => {
  const sidebarContents = [
    {icon: <MdSpaceDashboard/>, name: "DASHBOARD"},
    {icon: <BiSolidUserDetail/>, name: "STUDENTS DETAILS"},
    {icon: <MdOutlineAppRegistration/>, name: "APPROVAL LIST"},
    {icon: <BiBarChartSquare/>, name: "VERDICTS"},
    {icon: <BsListCheck/>, name: "ATTENDANCE"},
  ];

  const HoverLi = styled.li`
    display:flex;
    gap: 10px;
    list-style: none;
    padding: 10px 20px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(14, 73, 71, 1);
      color: white;
    }
  `;

  return (
    <div style={{ width: "15%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: "0% 15px 15px 0%", backgroundColor: "white" }}>
      <div>
        <h3 style={{ padding: "20px" }}>COUNSELLOR</h3>
        <ul>
          {sidebarContents.map((content, index) => (
            <HoverLi key={index}>
              <div>{content.icon}</div>
              <div style={{ fontSize: "90%", fontWeight: "bold" }}>{content.name}</div>
            </HoverLi>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "10px", display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
          <CgProfile />
          <h5>COUNSELLOR</h5>
        </div>
        <button style={{ margin: "10px", width: "80%", border: "none", backgroundColor: "rgba(14, 73, 71, 1)", color: "white", borderRadius: "20px", fontSize: '15px', fontWeight: "bold", padding: '8px', display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
