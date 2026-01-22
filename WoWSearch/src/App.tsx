import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import CharactersPage from "./pages/CharactersPage";
import Footer from "./components/Footer";
import Favorites from "./pages/FavoritesPage";
import Contact from "./pages/Contact";

// Create custom theme
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path='/' element={<CharactersPage />} />
        <Route path='/home' element={<CharactersPage />} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;