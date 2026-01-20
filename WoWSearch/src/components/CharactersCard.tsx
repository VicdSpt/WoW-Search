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
  hoverColor?: string;
  website: string
}
interface CharacterCardProps {
  character: Character;
}

export default function ShowCharactersCard({ character }: CharacterCardProps) {
  return (
    <Card>
      <CardActionArea
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: character.hoverColor,
          },
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={`${character.name} - ${character.race} ${character.class}`}
        />
        <CardContent sx={{ px: 4 }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {character.name}
          </Typography>
          <Typography>
            {" "}
            {character.race} {character.class}
          </Typography>
          <Typography>{character.faction}</Typography>
          <Typography>{character.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          justifyContent: "space-between",
          py: 2,
          backgroundColor: "#e9ecef",
        }}
      >
        <Button>Add to Favorite</Button>
        <Button
          component="a"
          href={character.website}
          target="_blank"
          sx={{
            "&:hover": {
              backgroundColor: "#bfdbf7",
            },
          }}
        >
          More About this character
        </Button>
        <FavoriteIcon sx={{ color: "red" }} />
      </CardActions>
    </Card>
  );
}
