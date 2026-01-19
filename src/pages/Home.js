import React, { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const [artist, setArtist] = useState("Coldplay");

  const url = useMemo(() => {
    return `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
      artist
    )}`;
  }, [artist]);

  const { data, loading, error, refetch } = useFetch(url);

  const songs = useMemo(() => {
    if (!data || !data.album) return [];

    return data.album.map((album) => ({
      id: album.idAlbum,
      title: album.strAlbum,
      artist: album.strArtist,
      album: album.strAlbum,
    }));
  }, [data]);

  return (
    <div>
      <SearchBar onSearch={setArtist} />

      {loading && <p>Cargando...</p>}

      {error && (
        <div>
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <button onClick={refetch}>Reintentar</button>
        </div>
      )}

      {!loading && !error && <SearchResults songs={songs} />}
    </div>
  );
};

export default Home;

