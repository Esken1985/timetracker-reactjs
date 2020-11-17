import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../../shared_components/Modal/Modal";
import AddWorklog from "./AddWorklog/AddWorklog";
import AddWorklogTop from "./AddWorklog/AddWorklogTop";
import NewWorklogForm from "./NewWorklogForm/NewWorklogForm";
import Stopwatch from "./Stopwatch";

const AsideStopwatch = styled.div`
  border-bottom: 1px solid #e9ecf2;
  padding-bottom: 33px;
`;

const Aside = () => {
  const [stopwatchOn, setStopwatchOn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startTime, setStartTime] = useState({ startedAt: "" });
  const [finishTime, setFinishTime] = useState({ finishedAt: "" });
  const [submitted, setSubmitted] = useState(false);


  const startStopwatch = () => {
    setStopwatchOn(true);
    setStartTime(Date.now());
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <AddWorklogTop />
      <AsideStopwatch>
        {stopwatchOn ? (
          <Stopwatch
            openModal={openModal}
            setFinishTime={setFinishTime}
            submitted={submitted}
          />
        ) : (
          <AddWorklog
            startStopwatch={startStopwatch}
            modalIsOpen={modalIsOpen}
          />
        )}
      </AsideStopwatch>
      <Modal modalIsOpen={modalIsOpen}>
        <NewWorklogForm
          setSubmitted={setSubmitted}
          setStopwatchOn={setStopwatchOn}
          closeModal={closeModal}
          startTime={startTime}
          finishTime={finishTime}
        />
      </Modal>
    </>
  );
};

export default Aside;
