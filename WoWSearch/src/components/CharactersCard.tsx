import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Character {
    id: number;
    name: string,
    race: string;
    class: string;
    faction: string;
    description: string;
    image: string;
}
interface CharacterCardProps{
    character: Character;
}

export default function ShowCharactersCard({character}: CharacterCardProps) {
  return (
    <Card className='my-5 '>
      <CardActionArea>
        <CardMedia
          component="img"
          image={character.image}
          alt={`${character.name} - ${character.race} ${character.class}`}
        />
        <CardContent>
          <Typography>{character.name}</Typography>
          <Typography>{character.race} {character.class}</Typography>
          <Typography>{character.faction}</Typography>
          <Typography>{character.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Add to Favorite <FavoriteIcon /></Button>
      </CardActions>
    </Card>
  );
}
