import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

export default function SearchCharacters() {
  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
        World of Warcraft Search Characters
      </Typography>
      
      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="input-with-icon-adornment">
          Search a Character...
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <img 
                src="/images/WoW-Icon.png" 
                alt="WoW search icon" 
                style={{ width: 24, height: 24, objectFit: 'contain' }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}