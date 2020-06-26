import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {isPlaying, src} = this.props;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          onClick={() => {}}></button>
        <div className="track__status">
          <audio
            src={src} />
        </div>
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};
