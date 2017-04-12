import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/questions")
      .then(response => response.json())
      .then(json => {
        this.setState({questions: json});
      });
  }

  render() {
    let questions = this.props.questions.map((question) => {
      return (
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      )
    });

    return(
      <ul>
        {questions}
      </ul>
    );

  }
};

export default QuestionList;
