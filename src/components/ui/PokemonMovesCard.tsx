import { Mfe } from "@/types/pokemon-types";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface PokemonMovesCardProps {
  moves: Mfe[];
}

const PokemonMovesCard = ({ moves }: PokemonMovesCardProps) => {
  return (
    <Box mt={6}>
      <Heading size="md" mb={2}>
        Moves
      </Heading>
      <Box
        maxH="150px"
        overflowY="auto"
        p={2}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
      >
        <Stack gap={1}>
          {moves.map(({ move }) => (
            <Text key={move.name} textTransform="capitalize" fontSize="sm">
              {move.name}
            </Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default PokemonMovesCard;
