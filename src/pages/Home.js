import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../redux/slices/searchSlice";

const Home = () => {
  const dispatch = useDispatch();

  // búsqueda inicial como antes ("Coldplay")
  useEffect(() => {
    dispatch(fetchSongs("Coldplay"));
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Home;

