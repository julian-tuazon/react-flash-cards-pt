import React from 'react';
import {AppContext} from './app-context';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.context.addCard({ question: this.state.question, answer: this.state.answer });
    this.setState({ question: '', answer: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Create New Card</h1>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="question">Question:</label>
          </p>
          <p className="w-50 mx-auto d-flex justify-content-center">
            <textarea id="question" className="form-control" rows="3" onChange={this.handleChange} value={this.state.question} />
          </p>
          <div>
            <label htmlFor="answer">Answer:</label>
          </div>
          <div className="w-50 mx-auto d-flex justify-content-center">
            <textarea id="answer" className="form-control" rows="3" onChange={this.handleChange} value={this.state.answer} />
          </div>
          <div className="my-3 w-50 mx-auto d-flex justify-content-end">
            <button type="submit" className="mr-3 btn btn-outline-primary">Save Card</button>
            <button type="button" className="btn btn-outline-danger">Cancel</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

CreateCard.contextType = AppContext;
