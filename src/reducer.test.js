import {reducer, ActionCreator, ActionType} from "./reducer.js";

const questions = [
  {
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
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/2/2e/ChristamChoir.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/A`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AB`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/AC`,
      artist: `Jim Beam`,
    }],
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
    maxMistakes: 3,
    questions,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
  expect(ActionCreator.incrementMistake({
    type: `artist`,
    song: {
      artist: `correct`,
      src: ``,
    },
    answers: [
      {
        artist: `correct`,
        picture: ``,
      }, {
        artist: `incorrect`,
        picture: ``,
      }, {
        artist: `incorrect-2`,
        picture: ``,
      },
    ]
  }, {
    artist: `correct`,
    picture: ``,
  })).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
  expect(ActionCreator.incrementMistake({
    type: `artist`,
    song: {
      artist: `correct`,
      src: ``,
    },
    answers: [
      {
        artist: `correct`,
        picture: ``,
      }, {
        artist: `incorrect`,
        picture: ``,
      }, {
        artist: `incorrect-2`,
        picture: ``,
      },
    ]
  }, {
    artist: `incorrect`,
    picture: ``,
  })).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});

it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
  expect(ActionCreator.incrementMistake({
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        genre: `rock`,
        src: ``,
      }, {
        genre: `jazz`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      },
    ]
  }, [false, true, false, false])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 0,
  });
});

it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
  expect(ActionCreator.incrementMistake({
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      }, {
        genre: `blues`,
        src: ``,
      },
    ]
  }, [true, true, true, true])).toEqual({
    type: ActionType.INCREMENT_MISTAKES,
    payload: 1,
  });
});
