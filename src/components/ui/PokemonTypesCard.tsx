import { Type } from "@/types/pokemon-types";
import { Badge, Flex } from "@chakra-ui/react";

interface PokemonTypesCardProps {
  types: Type[];
}

const PokemonTypesCard = ({ types }: PokemonTypesCardProps) => {
  return (
    <Flex gap={2} mt={4} justify="center" flexWrap="wrap">
      <span>Type:</span>
      {types.map(({ type }) => (
        <Badge
          key={type.name}
          colorPalette="purple"
          fontSize="md"
          textTransform="capitalize"
        >
          {type.name}
        </Badge>
      ))}
    </Flex>
  );
};

export default PokemonTypesCard;
