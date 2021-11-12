import React, { useState } from "react";
import "./DictionaryForm.css";

export default function DictionaryForm() {
  let [vocabulary, setVocabulary] = useState(" ");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${vocabulary}`);
  }
  function updateVocabulary(event) {
    setVocabulary(event.target.value);
  }
  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Look for a word"
        id="wordSearchbar"
        autoFocus="on"
        autoComplete="off"
        onChange={updateVocabulary}
      ></input>
      <button type="submit" className="btn btn-primary" id="searchButton">
        Search
      </button>
    </form>
  );
}
