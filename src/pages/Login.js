import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import { savePlayerInfo } from '../redux/actions';

class Login extends React.Component {
  state = {
    username: '',
    email: '',
    isButtonDisabled: true,
  };

  validationUserAndEmail = () => {
    const {
      email,
      username,
    } = this.state;
    const minCharacter = 1;
    const valUsername = username.length >= minCharacter;
    const valEmail = email.length >= minCharacter;

    this.setState({
      isButtonDisabled: !(valUsername && valEmail),
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validationUserAndEmail);
  };

  fetchTriviaToken = async () => {
    const API_URL = 'https://opentdb.com/api_token.php?command=request';
    const request = await fetch(API_URL);
    const data = await request.json();
    const { token } = data;

    localStorage.setItem('token', token);
  };

  onLoginButtonClick = async () => {
    const { history, saveInfo } = this.props;
    await this.fetchTriviaToken();
    const { username: name, email } = this.state;
    const gravatarEmail = md5(email).toString();
    saveInfo(name, gravatarEmail);
    history.push('/game');
  };

  settingsClick = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const {
      username,
      email,
      isButtonDisabled,
    } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="player-input">
            Username
            <input
              data-testid="input-player-name"
              type="text"
              name="username"
              id="player-input"
              onChange={ this.onInputChange }
              value={ username }
            />
          </label>
          <label htmlFor="email-input">
            email
            <input
              data-testid="input-gravatar-email"
              type="text"
              name="email"
              id="email-input"
              onChange={ this.onInputChange }
              value={ email }
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            onClick={ this.onLoginButtonClick }
            disabled={ isButtonDisabled }
          >
            Play
          </button>
        </form>
        <button
          data-testid="btn-settings"
          onClick={ this.settingsClick }
        >
          Configurações
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveInfo: (name, gravatarEmail) => dispatch(savePlayerInfo(name, gravatarEmail)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
