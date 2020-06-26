import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockAudioElement = () => {
  Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
    configurable: true,

    get() {
      setTimeout(() => (this.onloadeddata && this.onloadeddata()));
      return () => {};
    }
  });
};

describe(`AudioPlayer e2e tests`, () => {
  it(`Buttons Play and Pause change correctly`, () => {
    const src = `https://upload.wikimedia.org/wikipedia/commons/4/47/Beethoven_Moonlight_2nd_movement.ogg`;
    const onPlayButtonClick = jest.fn();
    const isPlaying = true;

    mockAudioElement();

    const audioPlayer = mount(
        <AudioPlayer
          src={src}
          isPlaying={isPlaying}
          onPlayButtonClick={onPlayButtonClick}
        />);

    const trackButton = audioPlayer.find(`button`);

    trackButton.props().onClick();

    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(audioPlayer.state().isPlaying).toEqual(false);
  });
});
