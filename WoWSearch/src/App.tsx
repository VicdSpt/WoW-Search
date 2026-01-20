import "./App.css";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import CharactersCard from "./components/CharactersCard";
import Footer from "./components/Footer";

// Create custom theme
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

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

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchCharacters, setSearchCharacters] = useState("");

  useEffect(() => {
    fetch("/CharactersData.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error Loading yours Characters", error));
  }, []);

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{display: "flex", flexDirection:"column", minHeight:"100vh"}}>
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
              <CharactersCard key={character.id} character={character} />
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;