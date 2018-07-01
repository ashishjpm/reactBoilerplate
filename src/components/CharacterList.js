import React from 'react';
import { connect } from 'react-redux';import {
  setCurrentCharacter,
  getCharacterProfile,
} from '../reducer/character/actions';

const CharacterList = ({ characters, character, setCharacter }) =>
  <div>
    <div id='character-list' className='col-md-6'>
      <h1>Characters</h1>
      <ul>
        {characters.map((c, i) =>
          <li
            onClick={setCharacter(i + 1)}
            key={c.name}
          >
            {c.name}
          </li>
        )}
      </ul>
    </div>
    <div id='character-profile' className='col-md-6'>
      <h1>Profile</h1>
      {character.name && <p>Name: {character.name}</p>}
      {character.height && <p>Height: {character.height}cm</p>}
      {character.mass && <p>Weight: {character.mass}kg</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
    </div>
  </div>;

// const mapStateToProps = ({ characters }) => ({
//   characters,
// });
function mapStateToProps(state) {
  return {
    characters: state.characters,
    character: state.character,
  }
}

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);