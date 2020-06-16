import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionsScreen from "./genre-questions-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`GenreQuestionsScreen e2e tests`, () => {
  it(`Form is not sent on submit`, () => {
    const onAnswer = jest.fn();

    const genreQuestionsScreen = shallow(
        <GenreQuestionsScreen
          question={question}
          onAnswer={onAnswer} />
    );

    const formElement = genreQuestionsScreen.find(`form`);
    const formSendPrevention = jest.fn();

    formElement.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
