import React from "react";
import { Wrapper, Title, List, Card, ActionButton } from "./styles";

// ✅ Redux
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/libraryActions";

const Library = () => {
  const songs = useSelector((state) => state); 
  const dispatch = useDispatch();

  const handleRemove = (songId) => {
    dispatch(removeSong(songId));
  };

  return (
    <Wrapper>
      <Title>Mi Biblioteca</Title>

      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        <List>
          {songs.map((song) => (
            <Card key={song.id}>
              <h3>{song.title}</h3>
              <p>Artista: {song.artist}</p>
              <p>Álbum: {song.album}</p>

              <ActionButton
                onClick={() => handleRemove(song.id)}
                $variant="danger"
              >
                Eliminar
              </ActionButton>
            </Card>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Library;



