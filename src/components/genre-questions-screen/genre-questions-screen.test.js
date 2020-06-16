import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionsScreen from "./genre-questions-screen.jsx";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

describe(`GenreQuestionsScreen`, () => {
  it(`Renders correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionsScreen
        question={question}
        onAnswer={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
