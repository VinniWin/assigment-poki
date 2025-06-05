import { TStat } from "@/types/pokemon-types";
import { Box, Heading, HStack, Progress, SimpleGrid } from "@chakra-ui/react";

interface PokemonStatsCardProps {
  stats: TStat[];
}

const PokemonStatsCard = ({ stats }: PokemonStatsCardProps) => {
  return (
    <Box mt={6}>
      <Heading size="md" mt={2}>
        Base Stats
      </Heading>
      <SimpleGrid columns={[2, 3]} gap={4}>
        {stats.map(({ stat, base_stat }) => (
          <Progress.Root
            key={stat.name}
            colorPalette={"purple"}
            max={100}
            value={base_stat}
            maxW="sm"
          >
            <HStack align={"center"} gap="5">
              <Progress.Label textTransform="capitalize">
                {stat.name}
              </Progress.Label>
              <Progress.Track flex="1" borderRadius={"lg"}>
                <Progress.Range animationDelay={"slowest"} />
              </Progress.Track>
              <Progress.ValueText>{base_stat}</Progress.ValueText>
            </HStack>
          </Progress.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PokemonStatsCard;
