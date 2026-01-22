import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Search from "../components/Search";
import CharactersCard from "../components/CharactersCard";

interface Character {
  id: number;
  name: string;
  race: string;
  class: string;
  faction: string;
  description: string;
  image: string;
  hoverColor?: string;
  website: string;
}

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchCharacters, setSearchCharacters] = useState("");
  const [favorites, setFavorites] = useState<Character[]>(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  });

  useEffect(() => {
    fetch("/CharactersData.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error Loading yours Characters", error));
  }, []);

  // Toggle favorite status
  const handleToggleFavorite = (character: Character) => {
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, character];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Filter characters based on search term
  const filteredCharacters = characters.filter((character) => {
    if (searchCharacters === "") {
      return true; // Show all when no search term
    }

    const search = searchCharacters.toLowerCase();

    return (
      character.name.toLowerCase().includes(search) ||
      character.race.toLowerCase().includes(search) ||
      character.class.toLowerCase().includes(search) ||
      character.faction.toLowerCase().includes(search)
    );
  });

  return (
    <Container maxWidth="xl">
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Search
          searchCharacters={searchCharacters}
          setSearchCharacters={setSearchCharacters}
          resultsCount={filteredCharacters.length}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
            py: 5,
          }}
        >
          {filteredCharacters.map((character) => (
            <CharactersCard
              key={character.id}
              character={character}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.some((fav) => fav.id === character.id)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
