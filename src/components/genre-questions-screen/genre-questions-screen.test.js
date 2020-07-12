import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionsScreen from "./genre-questions-screen.jsx";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/47/Beethoven_Moonlight_2nd_movement.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/9/9f/Carmen_-_Prelude_to_Act_1.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/43/JOHN_MICHEL_CELLO-J_S_BACH_CELLO_SUITE_1_in_G_Prelude.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/d/de/W._A._Mozart_-_Die_Zauberfl%C3%B6te_-_18._Der_H%C3%B6lle_Rache_kocht_in_meinem_Herzen_%28Ferenc_Fricsay%2C_1953%29.ogg`,
    genre: `rock`,
  }],
};

describe(`GenreQuestionsScreen`, () => {
  it(`Renders correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionsScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={[false, false, false, false]} />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
