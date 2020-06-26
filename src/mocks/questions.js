const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://commons.wikimedia.org/wiki/File:Richard_Wagner_-_The_Valkyrie_-_Ride_of_the_Valkyries.flac`,
      genre: `rock`,
    }, {
      src: `https://commons.wikimedia.org/wiki/File:Egmont_Overture_Finale_(ISRC_USUAN1200070).mp3`,
      genre: `blues`,
    }, {
      src: `https://commons.wikimedia.org/wiki/File:Bach_Prelude_from_Cello_Suite_in_G.wav`,
      genre: `jazz`,
    }, {
      src: `https://commons.wikimedia.org/wiki/File:Danse_Macabre_-_Busy_Strings_(ISRC_USUAN1100556).mp3`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://commons.wikimedia.org/wiki/File:ChristamChoir.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];
