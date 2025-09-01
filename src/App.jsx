// importazione
import { useEffect, useState } from "react";

// dati iniziali
const initialMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

  function App() {
  // sorgente
  const [sourceMovies] = useState(initialMovies);

  // tracciamento filtro selezionato
  const [genreFilter, setGenreFilter] = useState(""); 

  // mantenimento risultati da mostrare in UI
  const [results, setResults] = useState(initialMovies); 

  // ricavo lista dei generi disponibili dai dati
  const genres = ["", ...Array.from(new Set(sourceMovies.map(m => m.genre))).sort()];

  // ricalcolo risultato quando cambia il filtro
  seEffect(() => {
    // applicazione filtro & aggiornamento stato
  setResults(
    sourceMovies.filter(
      (movie) => genreFilter === "" || movie.genre === genreFilter
    )
  );
}, [genreFilter, sourceMovies]);



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
