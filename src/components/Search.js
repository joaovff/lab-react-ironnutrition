import { useState } from 'react';
function Search(props) {
  const [key, setKey] = useState('');

  function handleKeyInput(event) {
    setKey(event.target.value);
    props.handleFilteredFoods(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" onChange={handleKeyInput} value={key} id="search" />
    </div>
  );
}

export default Search;
