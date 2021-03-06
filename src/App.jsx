import React, { Component } from "react";
import Question from "./components/Question";
import Card from "./components/Card";
import { countingToN } from "./utils/counting";
import "./tailwind.css";
import "animate.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      numberOperation: 0,
      correctAnswers: 0,
      animationClass: ""
    };
    this.state = Object.assign(countingToN(), this.state);
    this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }
  handleAnimationEnd() {
    this.setState({ animationClass: "" });
  }
  handleAnswerButtonClick(number) {
    const isCorrect = this.state.a + this.state.b === number ? 1 : 0;

    this.setState((state, props) => ({
      correctAnswers: state.correctAnswers + isCorrect,
      numberOperation: state.numberOperation + 1
    }));

    this.setState(countingToN());
    if (!isCorrect) {
      this.setState({ animationClass: `animated  shake` });
    }
  }
  render() {
    let className = `container w-1/2 min=h-screen  mx-auto p-4 bg-grey-light font-sans my-20 rounded-lg shadow-lg ${
      this.state.animationClass
    }`;
    const ListAnswer = this.state.answers.map((answer, index) => (
      <Card
        key={index}
        content={answer}
        onAnswerGot={this.handleAnswerButtonClick}
      />
    ));
    return (
      <div className={className} onAnimationEnd={this.handleAnimationEnd}>
        <header className=" border-grey p-4 border-b-2">
          <h1 className="text-center ">
            Welcome -{"Nada & Zaky"} - to Math Quiz.
          </h1>
        </header>
        <div className="m-8">
          <Question content={`What is ${this.state.a} add ${this.state.b} ?`} />
        </div>
        <div className="m-4 p-4 bg-grey flex flex-row justify-around rounded-lg">
          {ListAnswer}
        </div>

        <footer className="border-orange border-t-2 p-2">
          <p className="text-center">Made with love By @Hakim</p>
        </footer>
      </div>
    );
  }
}

export default App;
