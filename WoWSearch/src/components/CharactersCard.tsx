import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Character {
  id: number;
  name: string;
  race: string;
  class: string;
  faction: string;
  description: string;
  image: string;
  hoverColor?: string
}
interface CharacterCardProps {
  character: Character;
}

export default function ShowCharactersCard({ character }: CharacterCardProps) {
  return (
    <Card>
      <CardActionArea sx={{
    '&:hover': {
      backgroundColor: character.hoverColor, // or any color you want
    }
  }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={`${character.name} - ${character.race} ${character.class}`}
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: character.hoverColor
            },
          }}
        />
        <CardContent>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {character.name}
          </Typography>
          <Typography>
            {character.race} {character.class}
          </Typography>
          <Typography>{character.faction}</Typography>
          <Typography>{character.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Add to Favorite </Button>
        <FavoriteIcon sx={{color:'red'}}/>
      </CardActions>
    </Card>
  );
}
