import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

interface SearchProps {
  searchCharacters: string;
  setSearchCharacters: (value: string) => void;
  resultsCount: number;
}

export default function Search({ searchCharacters, setSearchCharacters, resultsCount }: SearchProps) {
  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacters(event.target.value);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
        <Typography
          component="h1"
          gutterBottom
          sx={{ fontSize: "3rem", textAlign: "center" }}
        >
          World of Warcraft Search Characters
        </Typography>

        <FormControl variant="standard" fullWidth>
          <InputLabel htmlFor="input-with-icon-adornment">
            Search a Character...
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={searchCharacters}
            onChange={searchInput}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src="/images/WoW-Icon.png"
                  alt="WoW search icon"
                  style={{ width: 24, height: 24, objectFit: "contain" }}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      {searchCharacters !== "" && (
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          Found {resultsCount} character
          {resultsCount !== 1 ? "s" : ""}
        </Typography>
      )}
    </Box>
  );
}