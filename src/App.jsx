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

  // tracciamento via titolo selezionato
  const [titleQuery, setTitleQuery] = useState("");

  // mantenimento risultati da mostrare in UI
  const [results, setResults] = useState(initialMovies);

  // ricavo lista dei generi disponibili dai dati
  const genres = ["", ...Array.from(new Set(sourceMovies.map(m => m.genre))).sort()];

  // ricalcolo risultato quando cambia filtro o query
  useEffect(() => {
    // filtro per genere & titolo
    setResults(
      sourceMovies.filter((movie) => {
        const matchGenre = genreFilter === "" || movie.genre === genreFilter;
        const q = titleQuery.trim().toLowerCase();
        const matchTitle = q === "" || movie.title.toLowerCase().includes(q);
        return matchGenre && matchTitle;
      })
    );
  }, [genreFilter, titleQuery, sourceMovies]);

   // aggiunta di un nuovo film
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  const addMovie = (e) => {
    // prevenzione refresh
    e.preventDefault();
    // ripulisco input
    const title = newTitle.trim();
    const genre = newGenre.trim();
    // blocco inserimenti vuoti
    if (!title) return;
    if (!genre) return;

    setSourceMovies((prev) => [...prev, { title, genre }]);
    // svuotamento campi del form dopo l’inserimento
    setNewTitle("");
    setNewGenre("");
  };

  return (
    <div className="container">
      <h1>Seleziona Film per Genere</h1>

      {/* campo di ricerca per titolo */}
      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="Cerca per titolo"
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
          aria-label="Cerca film per titolo"
        />
      </div>

      {/* menu */}
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

      {/* form per aggiungere un nuovo film */}
      <form onSubmit={addMovie} style={{ marginTop: 15 }}>
        <h2 style={{ fontSize: 20 }}>Aggiungi film</h2>
        <div style={{ display: "grid", gap: 10, maxWidth: 350 }}>
          <input
            type="text"
            placeholder="Titolo"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            aria-label="Titolo nuovo film"
          />
          {/* generi */}
          <select
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            aria-label="Genere nuovo film"
          >
            <option value="">Seleziona Genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>

          <button type="submit">Aggiungi</button>
        </div>
      </form>
    </div>
  );
}
export default App;
