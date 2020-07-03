import React from "react";
import renderer from "react-test-renderer";
import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../helpers/constants.js";

const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`Renders correctly with GenreQuestionsScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen
            type={GameType.GENRE}
            mistakes={3}>
            {children}
          </GameScreen>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Renders correctly with ArtistQuestionsScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen
            type={GameType.ARTIST}
            mistakes={3}>
            {children}
          </GameScreen>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
