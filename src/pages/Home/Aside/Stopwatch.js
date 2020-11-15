import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import stopbtn from "../../../assets/stopBtn.svg";
import pausebtn from "../../../assets/pauseBtn.svg";
import startbtn from "../../../assets/playBtn.svg";

const StopwatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 54px;
  color: #1e1e1e;
`;
const StopwatchTitle = styled.div`
  text-align: center;
`;
const StopwatchWorklogName = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  padding-bottom: 14px;
`;
const StopwatchHeaderText = styled.div`
  font-size: 18px;
  color: #828282;
  padding-bottom: 11px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 31px;
  & div:first-child {
    margin-right: 22px;
  }
`;
const StopwatchButton = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  background-color: ${(props) => (props.stop ? "#EB5757" : "#3744BD")};
  justify-content: center;
  align-items: center;
`;
const StopwatchDisplay = styled.div`
  font-weight: bold;
  font-size: 54px;
  text-align: center;
  color: #1e1e1e;
`;
const PlayImg = styled.img`
  width: 90%;
`;
const PauseImg = styled.img`
  width: 40%;
`;
const StopImg = styled.img`
  width: 45%;
`;

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }
  async componentDidMount() {
    let timerOn = localStorage.getItem("timerOn") === "true";
    let timerStart = localStorage.getItem("timerStart");
    let timerTime = localStorage.getItem("timerTime");

    await this.setState({
      timerOn: timerOn,
      timerStart: timerStart,
      timerTime: timerTime,
    });

    if (timerOn) {
      this.startTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer = (e) => {
    let { timerOn, timerTime = 0, timerStart = 0 } = this.state;

    if (e && timerOn) {
      return; // stop continuous start button click
    }

    if (!timerOn) {
      // stop / pause state
      // start / resume from current time
      timerStart = Date.now() - timerTime;
    } else if (timerOn) {
      // running state
      // calculate and compensate closed time
      timerTime = Date.now() - timerStart;
    }

    this.setState({
      timerOn: true,
      timerTime: timerTime,
      timerStart: timerStart,
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - timerStart,
      });
    }, 10);

    localStorage.setItem("timerOn", true);
    localStorage.setItem("timerStart", timerStart);
    localStorage.removeItem("timerTime");
  };

  pauseTimer = () => {
    this.setState({ timerOn: false });
    localStorage.setItem("timerOn", false);
    localStorage.setItem("timerTime", this.state.timerTime);
    localStorage.removeItem("timerStart");
    clearInterval(this.timer);
  };

  stopTimer = () => {
    this.pauseTimer();
    this.props.openModal();
    this.props.setFinishTime(Date.now());
    this.setState({ timerOn: false });
    this.setState({ timerTime: 0 });
    localStorage.removeItem("timerOn");
    localStorage.removeItem("timerTime");
    localStorage.removeItem("timerStart");
  };


  render() {
    const { timerTime = 0 } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <StopwatchContainer>
        <StopwatchTitle>
          <StopwatchWorklogName>Add Worklog</StopwatchWorklogName>
          <StopwatchHeaderText>Add Issue</StopwatchHeaderText>
        </StopwatchTitle>
        <StopwatchDisplay>
          {hours}:{minutes}:{seconds}
        </StopwatchDisplay>
        <ButtonsContainer>
          <StopwatchButton stop onClick={this.stopTimer}>
            <StopImg src={stopbtn} alt="stop" />
          </StopwatchButton>
          <StopwatchButton play pause>
            {this.state.timerOn ? (
              <PauseImg src={pausebtn} alt="pause" onClick={this.pauseTimer} />
            ) : (
              <PlayImg src={startbtn} alt="play" onClick={this.startTimer} />
            )}
          </StopwatchButton>
        </ButtonsContainer>
      </StopwatchContainer>
    );
  }
}

Stopwatch.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Stopwatch;
