import React from "react";
import "./style.scss";

export class Testing extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="player">
            <h1 className="player-title">hello from player title</h1>
          </div>
          <div class="textContainer">
            <h1>hello world</h1>
            <h2>welcome to sass testing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur <span>dolor</span>{" "}
              adipisicing elit. Explicabo, eos.
            </p>
          </div>
          <div class="squareContainer">
            <div class="block green"></div>
            <div class="block pink"></div>
            <div class="block blue"></div>
          </div>
          <div class="gridContainer">
            <div class="grid1 block blue">1</div>
            <div class="grid2 block pink">2</div>
            <div class="grid3 block yellow">3</div>
          </div>
          <div class="btnContainer">
            <button class="btn green">Green</button>
            <button class="btn pink">pink</button>
            <button class="btn blue">blue</button>
            <button class="btn yellow">yellow</button>
          </div>
          <div className="testing">
            <div className="player">
              <h1 className="player-title">hello from player title</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
