import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionsScreen from '../genre-questions-screen/genre-questions-screen.jsx';
import ArtistQuestionsScreen from '../artist-questions-screen/artist-questions-screen.jsx';

const App = ({errorsCount, questions}) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {}} />
      </Route>
      <Route exact path="/dev-genre">
        <GenreQuestionsScreen
          question={questions[0]}
          onAnswer={() => {}} />
      </Route>
      <Route exact path="/dev-artist">
        <ArtistQuestionsScreen
          question={questions[1]} />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
