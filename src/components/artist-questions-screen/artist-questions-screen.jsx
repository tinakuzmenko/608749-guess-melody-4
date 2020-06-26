import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';
import {GameType} from '../../helpers/constants.js';

export default class ArtistQuestionsScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
    };
  }


  render() {
    const {isPlaying} = this.state;
    const {question, onAnswer} = this.props;
    const {answers, song} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              isPlaying={isPlaying}
              src={song.src}
              onPlayButtonClick={() => this.setState({
                isPlaying: !isPlaying,
              })}
            />
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, index) => (
            <div key={answer.artist} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`answer-${index}`}
                id={`answer-${index}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}
              />
              <label className="artist__name" htmlFor={`answer-${index}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>))}
        </form>
      </section>
    );
  }
}

ArtistQuestionsScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};
