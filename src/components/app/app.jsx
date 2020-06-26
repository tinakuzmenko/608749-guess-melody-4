import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import GenreQuestionsScreen from '../genre-questions-screen/genre-questions-screen.jsx';
import ArtistQuestionsScreen from '../artist-questions-screen/artist-questions-screen.jsx';
import withAudioPlayer from '../../hocs/with-audio-player.jsx';
import {GameType} from '../../helpers/constants.js';

const GenreQuestionsScreenWrapped = withAudioPlayer(GenreQuestionsScreen);
const ArtistQuestionsScreenWrapped = withAudioPlayer(ArtistQuestionsScreen);

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;

    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            this.setState({
              step: 0,
            });
          }}
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
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionsScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
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
};
