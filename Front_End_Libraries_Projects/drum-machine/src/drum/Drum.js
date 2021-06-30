import React from "react";
import { Button, Switch, Slider } from "antd";
import "./Drum.css";

const keyToPad = [
  {
    Q: "Chord 1",
    W: "Chord 2",
    E: "Chord 3",
    A: "Shaker",
    S: "Open HH",
    D: "Closed HH",
    Z: "Punchy Kick",
    X: "Side Stick",
    C: "Snare",
  },
  {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n'Hat",
    X: "Kick",
    C: "Closed HH",
  },
];

const BASE_URL = "https://s3.amazonaws.com/freecodecamp/drums/";

export default class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pad: "",
      switch: true,
      color: "#1890ff",
      volume: 20
    };

    this.hitPad = this.hitPad.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (keyToPad[+this.state.switch][event.key.toUpperCase()]) {
        this.setState(
          {
            pad: keyToPad[+this.state.switch][event.key.toUpperCase()],
          },
          () => {
            this.play(event.key.toUpperCase());
          }
        );
      }
    });
  }

  hitPad(event) {
    let key = event.currentTarget.children[0].innerText;
    this.setState(
      {
        pad: keyToPad[+this.state.switch][key],
      },
      function () {
        this.play(key);
      }
    );
  }

  play(key) {
    document.getElementById(key).volume = this.state.volume / 100
    document.getElementById(key).currentTime = 0;
    document.getElementById(key).play();
  }

  render() {
    return (
      <div id="drum-machine" style={{ backgroundColor: this.state.color }}>
        <div id="container">
          <div id="controls">
            <div
              id="display"
              style={{ backgroundColor: this.state.color }}
              className="control"
            >
              <h1>{this.state.pad}</h1>
            </div>
            <div id="volume" className="control">
              <span className="control-label">Volume</span>
              <Slider defaultValue={this.state.volume} onChange={ 
                  (value) => {
                      this.setState({
                          volume: value
                      })
                  }
               }/>
            </div>
            <div id="bank" className="control">
              <span className="control-label">Switch Bank</span>
              <Switch
                style={{ backgroundColor: this.state.color }}
                defaultChecked
                onClick={() => {
                  this.setState({
                    switch: !this.state.switch,
                  });
                }}
              ></Switch>
            </div>
            <div id="theme" className="control">
              <label className="control-label" htmlFor="change-theme">
                Change Theme
              </label>
              <input
                type="color"
                value={this.state.color}
                onChange={(event) => {
                  this.setState(
                    {
                      color: event.target.value,
                    },
                    () => {
                      const buttons = document.querySelectorAll(
                        "button.ant-btn-primary"
                      );
                      for (let i = 0; i < buttons.length; i++) {
                        buttons[i].style.backgroundColor = this.state.color;
                      }
                    }
                  );
                }}
              />
            </div>
          </div>

          <div id="drum-grid">
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              Q
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Heater-1" : "Chord_1") +
                  ".mp3"
                }
                className="clip"
                id="Q"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              W
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Heater-2" : "Chord_2") +
                  ".mp3"
                }
                className="clip"
                id="W"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              E
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Heater-3" : "Chord_3") +
                  ".mp3"
                }
                className="clip"
                id="E"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              A
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Heater-4_1" : "Give_us_a_light") +
                  ".mp3"
                }
                className="clip"
                id="A"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              S
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Heater-6" : "Dry_Ohh") +
                  ".mp3"
                }
                className="clip"
                id="S"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              D
              <audio
                src={
                  BASE_URL + (this.state.switch ? "Dsc_Oh" : "Bld_H1") + ".mp3"
                }
                className="clip"
                id="D"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              Z
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "Kick_n_Hat" : "punchy_kick_1") +
                  ".mp3"
                }
                className="clip"
                id="Z"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              X
              <audio
                src={
                  BASE_URL +
                  (this.state.switch ? "RP4_KICK_1" : "side_stick_1") +
                  ".mp3"
                }
                className="clip"
                id="X"
              ></audio>
            </Button>
            <Button type="primary" className="drum-pad" onClick={this.hitPad}>
              C
              <audio
                src={
                  BASE_URL + (this.state.switch ? "Cev_H2" : "Brk_Snr") + ".mp3"
                }
                className="clip"
                id="C"
              ></audio>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
