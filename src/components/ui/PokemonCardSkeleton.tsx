"use client";

import { useColorModeValue } from "@/hooks/useColorModeValue";
import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  count?: number;
}

const PokemonCardSkeleton = ({ count = 24 }: Props) => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return Array.from({ length: count }).map((_, i) => (
    <Card.Root
      key={`skeleton-${i}`}
      maxW="sm"
      overflow="hidden"
      variant="elevated"
      bg={cardBg}
      textAlign="center"
      _hover={{ transform: "scale(1.02)" }}
      transition="0.2s"
    >
      <Card.Body
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        py={4}
      >
        <Skeleton height="80px" width="80px" borderRadius="full" />
        <SkeletonText textAlign={"center"} noOfLines={1} gap="4" />
      </Card.Body>
    </Card.Root>
  ));
};

export default PokemonCardSkeleton;
