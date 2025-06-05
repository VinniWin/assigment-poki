import { Ability } from "@/types/pokemon-types";
import { Badge, Flex } from "@chakra-ui/react";

interface PokemonAbilitesCardProps {
  abilities: Ability[];
}

const PokemonAbilitesCard = ({ abilities }: PokemonAbilitesCardProps) => {
  return (
    <Flex gap={2} mt={4} justify="center" flexWrap="wrap">
      <span>Abilities:</span>
      {abilities.map(({ ability }) => (
        <Badge
          key={ability.name}
          colorPalette="purple"
          fontSize="md"
          textTransform="capitalize"
        >
          {ability.name}
        </Badge>
      ))}
    </Flex>
  );
};

export default PokemonAbilitesCard;
