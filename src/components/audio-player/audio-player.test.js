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
        isPlaying={false}
        src={mock.song.src}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Renders correctly when playing`, () => {
    const tree = renderer
      .create(<AudioPlayer
        isPlaying={true}
        src={mock.song.src}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
