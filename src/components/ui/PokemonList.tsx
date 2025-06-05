"use client";

import { useColorModeValue } from "@/hooks/useColorModeValue";
import { useDebounce } from "@/hooks/useDebounce";
import { Pokemon, PokemonApiResponse } from "@/types/pokemon-types";
import { Box, Field, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  readonly initialData: PokemonApiResponse;
}

const PokemonList = ({ initialData }: PokemonListProps) => {
  const [allPokemons] = useState<Pokemon[]>(initialData.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(
    searchTerm?.toLocaleLowerCase()?.trim(),
    300
  );
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(
    initialData.results
  );

  const bg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");

  useEffect(() => {
    const lowerSearch = debouncedSearchTerm;
    if (!lowerSearch) {
      setFilteredPokemons(allPokemons);
    } else {
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.includes(lowerSearch)
      );
      setFilteredPokemons(filtered);
    }
  }, [debouncedSearchTerm, allPokemons]);

  return (
    <Box bg={bg} p={6} minH="100vh">
      <Heading mb={4} textAlign="center" color={textColor}>
        Pokemon List
      </Heading>
      <Field.Root>
        <Field.Label color={textColor}>Pokemon Name</Field.Label>
        <Input
          variant={"outline"}
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="400px"
        />
        <Field.HelperText color={textColor} mb={6}>
          Search Pokemon by name.
        </Field.HelperText>
      </Field.Root>

      <SimpleGrid columns={[2, 3, 4, 6]} gap={4}>
        {debouncedSearchTerm ? (
          <PokemonCard pokemons={filteredPokemons} />
        ) : (
          <PokemonCard pokemons={allPokemons} />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default PokemonList;
