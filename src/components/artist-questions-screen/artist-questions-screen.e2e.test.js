import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionsScreen from "./artist-questions-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const question = {
  type: `artist`,
  song: {
    artist: ``,
    src: ``
  },
  answers: [
    {
      artist: `one`,
      picture: `pic-one`,
    },
    {
      artist: `two`,
      picture: `pic-two`,
    },
    {
      artist: `three`,
      picture: `pic-three`,
    },
  ],
};

describe(`ArtistQuestionsScreen e2e tests`, () => {
  it(`User's answer should pass required object`, () => {
    const onAnswer = jest.fn();
    const userAnswer = {
      artist: `one`,
      picture: `pic-one`,
    };

    const screen = shallow(<ArtistQuestionsScreen
      onAnswer={onAnswer}
      question={question}
      renderPlayer={() => {}}
    />);

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {
      preventDefault() {},
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
