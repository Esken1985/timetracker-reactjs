import React from "react";
import TimeRangeSlider from "react-time-range-slider";
import styled from "styled-components";
import styleable from "react-styleable";
import styles from "./styles.css";

const Container = styled.div`
  position: relative;
  max-width: 543px;
  padding: 49px 61px 73px 56px;
`;

class TimerangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.featureRef = React.createRef();
    this.changeStartHandler = this.changeStartHandler.bind(this);
    this.timeChangeHandler = this.timeChangeHandler.bind(this);
    this.changeCompleteHandler = this.changeCompleteHandler.bind(this);
    this.state = {
      value: {
        start: "07:00",
        end: "19:00",
      },
    };
  }

  changeStartHandler(time) {
    console.log("Start Handler Called", time);
  }

  timeChangeHandler(time) {
    this.setState({
      value: time,
    });
  }

  changeCompleteHandler(time) {
    console.log("Complete Handler Called", time);
  }
  
  render() {
    return (
      <Container>
        <TimeRangeSlider
          disabled={false}
          format={24}
          maxValue={"19:00"}
          minValue={"07:00"}
          name={"time_range"}
          onChangeStart={this.changeStartHandler}
          onChangeComplete={this.changeCompleteHandler}
          onChange={this.timeChangeHandler}
          step={1}
          value={this.state.value}
          className={this.props.styles}
        />
      </Container>
    );
  }
}

export default styleable(styles)(TimerangeSlider);
