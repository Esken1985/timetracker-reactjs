import React from "react";
import styled from "styled-components";

const Tracker = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9ecf2;
  border-radius: 10px;
`;
const Thumb = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: ${props => props.color};
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ percentage, color }) => {
  return (
    <Tracker>
      <Thumb percentage={percentage} color={color}/>
    </Tracker>
  );
};

export default ProgressBar;
