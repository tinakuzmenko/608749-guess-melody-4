import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player.jsx";

const mock = {
  song: {
    src: `https://commons.wikimedia.org/wiki/File:Egmont_Overture_Finale_(ISRC_USUAN1200070).mp3`
  }
};

describe(`AudioPlayer`, () => {
  it(`Renders correctly when not playing`, () => {
    const tree = renderer
      .create(<AudioPlayer
        isLoading={true}
        isPlaying={false}
        onPlayButtonClick={() => {}}
        src={mock.song.src}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Renders correctly when playing`, () => {
    const tree = renderer
      .create(<AudioPlayer
        isLoading={false}
        isPlaying={true}
        onPlayButtonClick={() => {}}
        src={mock.song.src}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
