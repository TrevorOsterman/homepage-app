import React from "react";
import "./App.css";

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
    setTimeout(() => this.setState({ comps: true }), 2000);
  }

  render() {
    return (
      <div className="App">
        <div className="greet-date">
          <h1
            className="animate__animated animate__fadeInUp greeting"
            style={{ fontSize: 60 }}
          >
            good{" "}
            <span class="tod" style={{ color: "#ffffde" }}>
              {this.state.timeOfDay}
            </span>
            , trevor.
          </h1>
          <h2 className="animate__animated animate__fadeInUp animate__delay-1s date">
            it's {this.state.date}
          </h2>
          <h3 style={{ display: this.state.comps ? "flex" : "none" }}>BUTTS</h3>
        </div>
      </div>
    );
  }
}

export default App;
