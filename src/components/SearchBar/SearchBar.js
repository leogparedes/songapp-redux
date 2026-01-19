import React, { useState } from "react";
import { Form, Input, Button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.search.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    dispatch(fetchSongs(term.trim()));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Escribe un artista... (ej: Oasis)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        $hasValue={term.trim().length > 0}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </Button>
    </Form>
  );
};

export default SearchBar;
