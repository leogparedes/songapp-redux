import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title, List, Card, ActionButton } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice";
import { fetchSongs } from "../../redux/slices/searchSlice";

const SearchResults = () => {
  const dispatch = useDispatch();

  const { results, loading, error, lastQuery } = useSelector(
    (state) => state.search
  );

  const handleRetry = () => {
    if (lastQuery) dispatch(fetchSongs(lastQuery));
  };

  return (
    <Wrapper>
      <Title>Resultados de búsqueda</Title>

      {loading && <p>Cargando...</p>}

      {error && (
        <div>
          <p>Hubo un problema al cargar los datos: {error}</p>
          <button onClick={handleRetry} disabled={!lastQuery}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && results.length === 0 && <p>No hay resultados.</p>}

      {!loading && !error && results.length > 0 && (
        <List>
          {results.map((song) => (
            <Card key={song.id}>
              <h3>{song.title}</h3>
              <p>Artista: {song.artist}</p>
              <p>Álbum: {song.album}</p>

              <Link to={`/song/${song.id}`}>Ver detalles</Link>

              <br />

              <ActionButton
                onClick={() => dispatch(addSong(song))}
                $variant="success"
              >
                Agregar a mi biblioteca
              </ActionButton>
            </Card>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default SearchResults;

