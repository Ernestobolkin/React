import React from "react";

export class HideNSeek extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ display:""}
  }
  ShowOrHide() {
    if(this.state.display==="none"){
      this.setState({display:this.state.display="block"})
    }else{
      this.setState({display:this.state.display="none"})
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.ShowOrHide.bind(this)}>Show/Hide</button>
        <div
          style={{ display:`${this.state.display}`,width: "100px", height: "100px", backgroundColor: "yellow" }}
        ></div>
      </div>
    );
  }
}
