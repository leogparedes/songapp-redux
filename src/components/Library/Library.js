import React from "react";
import { Wrapper, Title, List, Card, ActionButton } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice";

const Library = () => {
  const songs = useSelector((state) => state.library);
  const dispatch = useDispatch();

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
                onClick={() => dispatch(removeSong(song.id))}
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




