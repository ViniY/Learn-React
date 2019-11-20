import React, { Component } from "react";
import { thisExpression } from "@babel/types";
// import React from "react";
class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
    product: "I am a product"
    // tags: []
    // ImageUrl: "https://picsum.photos/200"
  };

  // style = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };
  // constructor() {
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this);
  // }
  handleIncreament = product => {
    // console.log("Increament Clicked", this.state.count);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    // React.createElement("div");
    // let classes = this.getBadgeClasses();
    // console.log("props", this.props);
    return (
      <div>
        {/* <img src={this.state.ImageUrl} alt="" /> */}
        {/* <span style={this.style}> {this.formatCount()}</span> */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* {this.props.children} {} */}
        {/* {/this line will print out all the children on the web/} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncreament(this.state.product)}
          className="btn btn-secondary btn-sm "
        >
          increament
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
