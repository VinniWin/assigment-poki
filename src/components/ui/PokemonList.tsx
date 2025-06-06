"use client";

import { useColorModeValue } from "@/hooks/useColorModeValue";
import { useDebounce } from "@/hooks/useDebounce";
import { Pokemon, PokemonApiResponse } from "@/types/pokemon-types";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Searchbar from "./Searchbar";

interface PokemonListProps {
  readonly initialData: PokemonApiResponse;
}

const PokemonList = ({ initialData }: PokemonListProps) => {
  const [allPokemons] = useState<Pokemon[]>(initialData.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
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
    try {
      setLoading(true);
      const lowerSearch = debouncedSearchTerm;
      if (!lowerSearch) {
        setFilteredPokemons(allPokemons);
      } else {
        const filtered = allPokemons.filter((pokemon) =>
          pokemon.name.includes(lowerSearch)
        );
        setFilteredPokemons(filtered);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm, allPokemons]);

  return (
    <Box bg={bg} p={6} minH="100vh">
      <Heading mb={4} textAlign="center" color={textColor}>
        Pokemon List
      </Heading>

      <Searchbar setSearchTerm={setSearchTerm} />

      <Suspense fallback="Loading....">
        <SimpleGrid columns={[2, 3, 4, 6]} gap={4}>
          {debouncedSearchTerm ? (
            <PokemonCard pokemons={filteredPokemons} loading={loading} />
          ) : (
            <PokemonCard pokemons={allPokemons} loading={loading} />
          )}
        </SimpleGrid>
      </Suspense>
    </Box>
  );
};

export default PokemonList;
