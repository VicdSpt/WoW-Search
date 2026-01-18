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
    fontFamily: ['Poppins'].join(","),
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
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("/CharactersData.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error Loading yours Characters", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box>
          <NavBar />
          <Search />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {characters.map((character) => (
              <CharactersCard key={character.id} character={character} />
            ))}
          </Box>
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
