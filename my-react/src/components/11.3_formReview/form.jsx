import React from "react";
import "./submit.style.css";

export class Form extends React.Component {
  state = {
    name: "",
    lastName: "",
    freeText: "",
    age: "",
    display: "none",
    submited: "none",
  };

  onFormNbtnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.age);
    this.setState({ display: "flex" });
  };
  selectedValue = (event) => {
    this.setState({ age: event.target.value });
  };

  displayChange=(e)=>{
    console.log(e);
    if(!e){
      this.setState({ display: "none" });
    }else{
      this.setState({ display: "none" });
      this.setState({ submited: "flex" });
    }
  }


  render() {
    return (
      <div className="inputContainer">
        <form onSubmit={this.onFormNbtnSubmit}>
          <span>
            <label>First Name: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </span>{" "}
          <br />
          <span>
            <label>Last Name: </label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </span>{" "}
          <br />
          <span>
            Age: 
            <select
              onChange={this.selectedValue}
              id="select"
              value={this.state.age}
            >
              <option>0</option>
              <option value="0-15">0-15</option>
              <option value="15-21">15-21</option>
              <option value="+21">+21</option>
            </select>
          </span>
          <span>
            Free Text{" "}
            <textarea
              name="Free"
              id="free"
              cols="20"
              rows="5"
              value={this.state.freeText}
              onChange={(e) => this.setState({ freeText: e.target.value })}
            ></textarea>{" "}
          </span>
          <button onClick={(e) => this.onFormNbtnSubmit} type="submit">
            Submit
          </button>
        </form>

        <div className="submited" style={{ display: this.state.display }}>
          <p>
            <span>Name: {this.state.name}</span>
            <br />
            <span>Last name: {this.state.lastName}</span>
            <br />
            <span>Age: {this.state.age}</span>
            <br />
            <span>Free text{this.state.freeText}</span>
            <br />
            <span>
            <button onClick={()=>this.displayChange(true)} type="submit">agree</button>
            <button onClick={()=>this.displayChange(false)} type="submit">change</button>
            </span>
          </p>
        </div>
        <div className="thanks" style={{ display: this.state.submited }}>
          <p>Thanks, We Will Be In Touch!!</p>
        </div>
      </div>
    );
  }
}
