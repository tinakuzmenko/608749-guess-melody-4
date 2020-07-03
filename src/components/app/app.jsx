import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import GenreQuestionsScreen from '../genre-questions-screen/genre-questions-screen.jsx';
import ArtistQuestionsScreen from '../artist-questions-screen/artist-questions-screen.jsx';
import withAudioPlayer from '../../hocs/with-audio-player.jsx';
import {GameType} from '../../helpers/constants.js';

const GenreQuestionsScreenWrapped = withAudioPlayer(GenreQuestionsScreen);
const ArtistQuestionsScreenWrapped = withAudioPlayer(ArtistQuestionsScreen);

class App extends PureComponent {
  _renderGameScreen() {
    const {
      errorsCount,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
    } = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionsScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionsScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderGameScreen()}
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionsScreenWrapped
            question={questions[0]}
            onAnswer={() => {}} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionsScreenWrapped
            question={questions[1]}
            onAnswer={() => {}} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
