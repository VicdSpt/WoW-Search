import { useState, useEffect } from "react";
import CharactersCard from "./CharactersCard";
import { Container } from '@mui/material';

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

export default function SelectionFavorites() {
  const [characters, setCharacters] = useState<Character[]>([]);
  
    const [favorites, setFavorites] = useState<Character[]>(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  });
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Load all characters from JSON
  useEffect(() => {
    fetch("/CharactersData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load characters');
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading your characters:", error);
        setError(error);
        setLoading(false);
      });
  }, []);


  // Remove a character from favorites
  const handleRemoveFavorite = (character: Character) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Filter characters to show only favorites
  const favoritesCharacter = characters.filter((character) =>
    favorites.some((fav) => fav.id === character.id)
  );

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error: {error.message}</div>;
  }

  if (favoritesCharacter.length === 0) {
    return <div className="text-center p-8">No Favorite Characters</div>;
  }

return (
<Container maxWidth="lg" sx={{ py: 4 }}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  }}>
    {favoritesCharacter.map((character) => (
      <CharactersCard
        key={character.id}
        character={character}
        onToggleFavorite={handleRemoveFavorite}
        isFavorite={true}
      />
    ))}
  </div>
</Container>
);
}