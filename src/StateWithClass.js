import React from "react";

class StateWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>State con clases</h1>
        <p>Hiciste click {this.state.count} veces</p>
        <button onClick={this.handleClick}>Click Aquí</button>
      </div>
    );
  }
}

export default StateWithClass;
