import React from "react";
import styled from "styled-components";
import moment from "moment"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TimerangeSlider from "./TimerangeSlider/TimerangeSlider";
import Submit from "../../../../assets/modalAccept.svg";
import cancel from "../../../../assets/modalCancel.svg";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { createIssue } from "../../../../redux/actions/actionCreators";

const FormTitle = styled.h2`
  background: #f8f8f8;
  box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
  padding: 30px 0px 30px 56px;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Label = styled.label`
  font-size: 10px;
  color: #4f4f4f;
`;
const StyledField = styled(Field)`
  border: none;
  border-bottom: 1px solid #e9ecf2;
  width: 543px;
  padding: 6px 0px 14px 0px;
  &::placeholder {
    font-size: 12px;
    line-height: 144.2%;
    color: #c4cacb;
  }
  &:focus {
    outline: none;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 61px 0px 56px;
  &:first-child {
    margin-bottom: 22px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 44px 0 46px 0;
`;
const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  &:first-child {
    margin-right: 22px;
  }
  &:focus {
    outline: none;
  }
`;

const initialValues = {
  worklog: "",
  issue: "",
};
const validationSchema = Yup.object({
  worklog: Yup.string().required("Please, enter worklog name"),
  issue: Yup.string().required("Please, enter issue name"),
});

const NewWorklogForm = ({ closeModal, startTime, finishTime, createIssue, setSubmitted, setStopwatchOn }) => {
  const onFormSubmit = (values) => {
    const newIssue = {
      worklog: values.worklog,
      issue: values.issue,
      date:  moment().format('YYYY:MM:DD'),
      blockDate: Date.now(),
      startedAt: startTime,
      finishedAt: finishTime,
      duration: finishTime - startTime,
      id: uuid(),
      favorite: false
    };
    createIssue(newIssue);
    setSubmitted(true);
    setStopwatchOn(false);
    closeModal();
  };
  return (
    <div>
      <FormTitle>New worklog</FormTitle>
      <TimerangeSlider />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        <StyledForm>
          <InputContainer>
            <Label htmlFor="worklog">Worklog Name</Label>
            <StyledField
              type="text"
              id="worklog"
              name="worklog"
              placeholder="Enter the worklog name"
            />
            <ErrorMessage name="worklog" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="issue">Issue</Label>
            <StyledField
              type="text"
              id="issue"
              name="issue"
              placeholder="Enter the issue name"
            />
            <ErrorMessage name="issue" />
          </InputContainer>
          <ButtonsContainer>
            <Button type="submit" onSubmit={onFormSubmit}>
              <img src={Submit} alt="submit" />
            </Button>
            <Button type="button" onClick={closeModal}>
              <img src={cancel} alt="cancel" />
            </Button>
          </ButtonsContainer>
        </StyledForm>
      </Formik>
    </div>
  );
};
const mapDispatchToProps = {
  createIssue,
};
const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWorklogForm);