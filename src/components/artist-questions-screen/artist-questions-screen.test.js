import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionsScreen from "./artist-questions-screen.jsx";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/${Math.random()}`,
    artist: `Jim Beam`,
  }],
};

describe(`ArtistQuestionsScreen`, () => {
  it(`Renders correctly`, () => {
    const tree = renderer
      .create(<ArtistQuestionsScreen
        question={question} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
