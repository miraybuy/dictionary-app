import React, { useState } from "react";
import "./DictionaryForm.css";
import Results from "./Results";
import axios from "axios";

export default function DictionaryForm() {
  let [vocabulary, setVocabulary] = useState("coding");
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${vocabulary}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateVocabulary(event) {
    setVocabulary(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="DictionaryForm">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Look for a word"
              id="wordSearchbar"
              autoFocus="on"
              autoComplete="off"
              onChange={updateVocabulary}
            ></input>
            <button
              type="submit"
              className="btn btn-branding"
              id="searchButton"
            >
              Search
            </button>
          </form>
        </section>
        <Results definition={definition} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
