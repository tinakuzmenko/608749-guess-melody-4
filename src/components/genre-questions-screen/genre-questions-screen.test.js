import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionsScreen from "./genre-questions-screen.jsx";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `path`,
    genre: `rock`,
  }, {
    src: `path`,
    genre: `blues`,
  }, {
    src: `path`,
    genre: `jazz`,
  }, {
    src: `path`,
    genre: `rock`,
  }],
};

describe(`GenreQuestionsScreen`, () => {
  it(`Renders correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionsScreen
        question={question}
        onAnswer={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
