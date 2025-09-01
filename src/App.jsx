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
  useEffect(() => {
    // applicazione filtro & aggiornamento stato
    setResults(
      sourceMovies.filter(
        (movie) => genreFilter === "" || movie.genre === genreFilter
      )
    );
  }, [genreFilter, sourceMovies]);

  return (
    <div className="container">
      <h1>Seleziona Film per Genere</h1>

      {/* menu*/}
      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="">Seleziona Genere</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      {/* lista */}
      <ul>
        {results.map((movie, index) => (
          <li key={index}>
            {movie.title} - <i>{movie.genre}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
