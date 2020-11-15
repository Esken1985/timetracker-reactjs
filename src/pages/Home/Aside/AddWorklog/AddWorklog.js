import React from "react";
import styled from "styled-components";
import AddWorklogBtn from "./AddWorklogBtn";

const BlockContainer = styled.div``;


const AddWorklog = ({startStopwatch}) => {
  
  return (
    <BlockContainer>
      <AddWorklogBtn startStopwatch={startStopwatch}/>
    </BlockContainer>
  );
};


export default AddWorklog ;