import { Container, Box, Typography } from '@mui/material';
import SelectionFavorites from '../components/SelectionFavorites';

export default function Favorites() {
  return (
    <Container maxWidth="xl">
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
      >
        Your Favorite Characters
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <SelectionFavorites />
      </Box>
    </Container>
  );
}