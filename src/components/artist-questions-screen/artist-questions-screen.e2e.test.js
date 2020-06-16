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

describe(`ArtistQuestionsScreen e2e tests`, () => {
  it(`Form is not sent on submit`, () => {
    const onAnswer = jest.fn();

    const genreQuestionsScreen = shallow(
        <ArtistQuestionsScreen
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
