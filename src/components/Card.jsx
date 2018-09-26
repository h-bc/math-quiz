import React from "react";
import "../tailwind.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = event => {
    this.props.onAnswerGot(this.props.content);
  };
  render() {
    return (
      <div className="card " onClick={this.handleClick}>
        {this.props.content}
      </div>
    );
  }
}
export default Card;
