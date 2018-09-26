import React from "react";
import "../tailwind.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="text-4xl text-center text-blue-dark">
        {this.props.content}
      </p>
    );
  }
}

export default Question;
