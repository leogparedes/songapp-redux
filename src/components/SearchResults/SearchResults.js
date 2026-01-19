import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title, List, Card, ActionButton } from "./styles";

// ✅ Redux
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

const SearchResults = ({ songs }) => {
  const dispatch = useDispatch();

  const handleAdd = (song) => {
    dispatch(addSong(song));
  };

  return (
    <Wrapper>
      <Title>Resultados de búsqueda</Title>

      {songs.length === 0 ? (
        <p>No hay resultados.</p>
      ) : (
        <List>
          {songs.map((song) => (
            <Card key={song.id}>
              <h3>{song.title}</h3>
              <p>Artista: {song.artist}</p>
              <p>Álbum: {song.album}</p>

              <Link to={`/song/${song.id}`}>Ver detalles</Link>

              <br />

              <ActionButton onClick={() => handleAdd(song)} $variant="success">
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
