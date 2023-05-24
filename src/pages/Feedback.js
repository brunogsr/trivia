import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  state = {
    feedbackText: '',
  };

  componentDidMount() {
    const { assertions } = this.props;
    const minAssertions = 3;
    this.setState({
      feedbackText: assertions < minAssertions ? 'Could be better...' : 'Well Done!',
    });
  }

  handleClickToPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleClickToRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { feedbackText } = this.state;
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{feedbackText}</p>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <button
          data-testid="btn-play-again"
          onClick={ this.handleClickToPlayAgain }
        >
          Play Again
        </button>
        <button
          data-testid="btn-ranking"
          onClick={ this.handleClickToRanking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
