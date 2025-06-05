import PokemonAbilitesCard from "@/components/ui/PokemonAbilitesCard";
import PokemonImageCarousel from "@/components/ui/PokemonImageCarousel";
import PokemonMovesCard from "@/components/ui/PokemonMovesCard";
import PokemonStatsCard from "@/components/ui/PokemonStatsCard";
import PokemonTypesCard from "@/components/ui/PokemonTypesCard";
import { extractSpriteUrls } from "@/lib/extract-sprite-urls";
import { fetchAllPokemons, fetchPokemonDetail } from "@/lib/pokemon-api";
import { Box, Heading } from "@chakra-ui/react";

export default async function Page({
  params,
}: {
  readonly params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = await fetchPokemonDetail(name);
  const images = extractSpriteUrls(data.sprites.other);
  return (
    <Box
      bg="gray.50"
      p={6}
      _dark={{ backgroundColor: "gray.900" }}
      minH="100vh"
    >
      <Heading
        mb={4}
        textAlign="center"
        color={"gray.800"}
        _dark={{ color: "gray.100" }}
        textTransform="capitalize"
      >
        {name} Pokemon Details
      </Heading>

      <PokemonImageCarousel images={images} />

      <PokemonTypesCard types={data.types} />

      <PokemonAbilitesCard abilities={data.abilities} />

      <PokemonStatsCard stats={data.stats} />

      <PokemonMovesCard moves={data.moves} />
    </Box>
  );
}

export async function generateStaticParams() {
  const pokemons = await fetchAllPokemons(120);

  return pokemons.results.map((pokemon) => ({
    name: pokemon.name,
  }));
}
