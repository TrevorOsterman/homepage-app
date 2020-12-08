import React from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    timeOfDay: "day",
    date: "",
    time: "",
    comps: false,
  };

  componentDidMount() {
    let getDate = new Date().toString().toLowerCase().split(" ");
    let date = getDate.slice(0, 4).join(" ");
    let time = getDate.slice(4);
    let tod = time[0].slice(0, 2);

    if (tod < 12) {
      this.setState({ timeOfDay: "morning" });
    } else if (tod < 17) {
      this.setState({ timeOfDay: "afternoon" });
    } else {
      this.setState({ timeOfDay: "evening" });
    }

    this.setState({ date: date, time: time });
    setTimeout(() => this.setState({ comps: true }), 3000);
  }

  render() {
    return (
      <div className="App">
        <div
          className="greet-date"
          style={{
            transition: "transform 1s",
            transform: this.state.comps ? "translateY(-30px)" : null,
          }}
        >
          <h1
            className="animate__animated animate__fadeInUp animate__delay-1s greeting"
            style={{ fontSize: 60 }}
          >
            good{" "}
            <span class="tod" style={{ color: "#ffffde" }}>
              {this.state.timeOfDay}
            </span>
            , trevor.
          </h1>
          <h2 className="animate__animated animate__fadeInUp animate__delay-2s date">
            it's {this.state.date}
          </h2>
        </div>
        <div
          className="comps"
          style={{
            width: "100%",
            height: "33%",
            display: this.state.comps ? "flex" : "none",
            justifyContent: "space-around",
          }}
        >
          <TodoList style={this.state.comps} />
        </div>
      </div>
    );
  }
}

export default App;
