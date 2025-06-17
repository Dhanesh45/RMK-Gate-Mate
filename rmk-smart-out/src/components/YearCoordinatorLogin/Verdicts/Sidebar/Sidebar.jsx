import { BiBarChartSquare } from "react-icons/bi";
import { MdSpaceDashboard, MdOutlineAppRegistration } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import styled from 'styled-components';

const Sidebar = () => {
  const sidebarContents = [
    { icon: <MdSpaceDashboard />, name: "DASHBOARD" },
    { icon: <MdOutlineAppRegistration />, name: "APPROVAL LIST" },
    { icon: <BiBarChartSquare />, name: "VERDICTS" },
  ];

  const HoverLi = styled.li`
    display: flex;
    gap: 5px;
    list-style: none;
    padding: 5%;
    &:hover {
      background-color: rgba(14, 73, 71, 1);
      color: white;
    }
  `;

  const [click, setClick] = useState(false);

  return (
    <div style={{
      width: "15%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "0% 15px 15px 0%",
      backgroundColor: "white"
    }}>
      <div>
        <div>
          <h3 style={{
            padding: "5% 0% 10% 5%",
            fontSize: "16px", // Decreased size
            fontWeight: "bold",
            color: "black"
          }}>
            YEAR COUNSELLOR
          </h3>
        </div>
        <ul style={{ padding: 0 }}>
          {
            sidebarContents.map((content, index) => {
              return (
                <HoverLi key={index}>
                  <li>{content.icon}</li>
                  <li style={{ fontSize: "90%", fontWeight: "bold" }}>{content.name}</li>
                </HoverLi>
              );
            })
          }
        </ul>
      </div>
      <div>
        <div style={{
          padding: "5% 0% 0% 0%",
          display: 'flex',
          gap: "4px",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div>
            <CgProfile />
          </div>
          <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>YEAR COUNSELLOR</h5>
        </div>
        <button style={{
          margin: "10%",
          width: "80%",
          border: "none",
          backgroundColor: "rgba(14, 73, 71, 1)",
          color: "white",
          borderRadius: "20px",
          fontSize: '15px',
          fontWeight: "bold",
          padding: '2%',
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
