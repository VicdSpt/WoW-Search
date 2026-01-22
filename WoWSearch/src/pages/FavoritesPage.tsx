import { Container, Box, Typography } from '@mui/material';
import SelectionFavorites from '../components/SelectionFavorites';

export default function Favorites() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
      >
        Your Favorite Characters
      </Typography>
      <Box>
        <SelectionFavorites />
      </Box>
    </Container>
  );
}