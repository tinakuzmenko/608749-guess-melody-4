import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionsScreen from "./artist-questions-screen.jsx";

const question = {
  type: `artist`,
  song: {
    artist: `Lady Gaga`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Madonna`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Lady Gaga`,
  }, {
    picture: `https://api.adorable.io/avatars/128/3`,
    artist: `Britney Spears`,
  }],
};

describe(`ArtistQuestionsScreen`, () => {
  it(`Renders correctly`, () => {
    const tree = renderer
      .create(<ArtistQuestionsScreen
        question={question}
        onAnswer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
