import React, { useState } from "react";
import "./DictionaryForm.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function DictionaryForm() {
  let [vocabulary, setVocabulary] = useState("coding");
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f917000010000010e9c62e44909491aab67baad10ee95be";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
              placeholder="coding"
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
