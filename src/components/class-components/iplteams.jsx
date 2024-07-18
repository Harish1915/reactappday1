import React, { Component, component } from "react";
import CustomProgressBar from "../bootstrap/progressbar";

class IplTeams extends Component {
  state = {
    iplTeams: [
      {
        id: 1,
        name: "CSK",
        totalWinCount: 5,
        source: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TDh9csqu6W-thQOdM1vmnAiHm6BP3mcz3g&s" height="150" width="100"/>

      },
      {
        id: 2,
        name: "SRH",
        totalWinCount: 2,
        source: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmDPUX8jhGyEcmhS14Ik8qqNj-hkknCCYrg&s" height="150" width="100"/>

      },
      {
        id: 3,
        name: "RCB",
        totalWinCount: 0,
        source: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd_LkMzgcYiBvWRQZaf6TRlmZntiYmA8jAA&s" height="150" width="100"/>

      },
    ],
  };
  calculatePercentage = (input) => {
    const base = 7;
    let percentage = (input / base) * 100;
    return percentage;
  };

  handleClick = (targetID) => {
    const newState = this.iplHandler(this.state.iplTeams, targetID);
    this.setState({
      iplTeams: newState,
    });
  };

  iplHandler = (iplTeams, targetTeamId) => {
    const updatedIplTeam = iplTeams.map((each) => {
      if (each.id === targetTeamId) {
        return { ...each, totalWinCount: each.totalWinCount + 1 };
      } else {
        return each;
      }
    });

    return updatedIplTeam;
  };

  render() {
    return (
      <div>
        {this.state.iplTeams.map((each) => {
          return (
            <>
              <h1>Team Name{each.name}</h1><br></br>
              <div>{each.source}</div><br></br><br></br>
              <button onClick={() => this.handleClick(each.id)}>
                Click to INC
              </button><br></br><br></br>
              <CustomProgressBar
                scale={this.calculatePercentage(each.totalWinCount)}
              />
            </>
          );
        })}
      </div>
    );
  }
}
export default IplTeams;
