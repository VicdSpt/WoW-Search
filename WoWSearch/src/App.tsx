// import { useState } from 'react'
import "./App.css";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CharactersCard from "./components/CharactersCard";

interface Character {
  id: number;
  name: string;
  race: string;
  class: string;
  faction: string;
  description: string;
  image: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("/CharactersData.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error Loading yours Characters", error));
  });

  return (
    <>
      <Container>
        <Box>
          <NavBar />
          <Search />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharactersCard key={character.id} character={character} />
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
}

export default App;
