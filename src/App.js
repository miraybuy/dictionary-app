import "./App.css";
import DictionaryForm from "./DictionaryForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <DictionaryForm />
        </main>
        <footer className="text-center mt-5">
          Coded by{" "}
          <a
            href="https://github.com/miraybuy"
            target="_blank"
            rel="noreferrer"
          >
            Miray Buyukkaray
          </a>
          , open-sourced{" "}
          <a
            href="https://github.com/miraybuy/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://distracted-ritchie-3fee50.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
