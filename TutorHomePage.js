// TutorHomePage.js
import  styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbarsign from './Navbarsign';

const TutorHomePage = () => {
  return (
    <StyledDiv>
      <Navbarsign/>
    <div>
      <h1>Welcome, Tutor!</h1>
      
      <Link to="/TutorDashboard" className = "dash-btn">Go to Dashboard</Link>
      
    </div>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
.dash-btn{
  font-size:15px;
  display:inline-block;
  padding:6px 16px;
  font-weight:700;
  transition:var(--transistion);
  white-space:nowrap;
  background-color:rgba(0,0,0,0.9);
  color:var(--clr-white);
}
`;
export default TutorHomePage;
