import React, { useState } from "react";
import "./DictionaryForm.css";
import axios from "axios";

export default function DictionaryForm() {
  let [vocabulary, setVocabulary] = useState(" ");
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${vocabulary}`;
    axios.get(apiUrl).then(handleResponse);
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
