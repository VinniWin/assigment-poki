"use client";

import { useColorModeValue } from "@/hooks/useColorModeValue";
import { Pokemon } from "@/types/pokemon-types";
import { Box, Card, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

interface PokemonCardProps {
  readonly pokemons: Pokemon[];
  loading: boolean;
}

const PokemonCard = ({ pokemons, loading }: PokemonCardProps) => {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const hoverColor = useColorModeValue("blue.100", "gray.600");

  if (loading) return <PokemonCardSkeleton />;

  if (pokemons.length === 0) {
    return (
      <Box width="100%" textAlign="center" mt={10}>
        <Text fontSize="lg" color={textColor}>
          No Pokémon found
        </Text>
      </Box>
    );
  }

  return pokemons.map((pokemon) => (
    <Card.Root
      key={pokemon.name}
      maxW="sm"
      overflow="hidden"
      variant={"elevated"}
      textAlign="center"
      _hover={{ bg: hoverColor, transform: "scale(1.05)" }}
      transition="0.2s"
    >
      <Link href={`/pokemon/${pokemon.name}`}>
        <Image
          src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
          alt={pokemon.name}
          width={80}
          height={80}
          style={{ justifySelf: "center" }}
          onError={(e) => {
            e.currentTarget.src = "/404.png";
            e.currentTarget.srcset = "/404.png";
          }}
        />
        <Card.Body gap="2">
          <Card.Title
            fontWeight="bold"
            textTransform="capitalize"
            color={textColor}
          >
            {pokemon.name}
          </Card.Title>
        </Card.Body>
      </Link>
    </Card.Root>
  ));
};

export default PokemonCard;
