"use client";

import { Box, Flex, IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PokemonImageCarouselProps {
  readonly images: string[];
}

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const PokemonImageCarousel = ({ images }: PokemonImageCarouselProps) => {
  const [hovering, setHovering] = useState(false);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      position="relative"
      width="100%"
      maxW="300px"
      mx="auto"
      minH="250px"
      shadow={"sm"}
      borderRadius={"md"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Flex
        overflowX="auto"
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        gap={4}
        py={4}
        px={2}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={images[index]}
            flex="0 0 auto"
            borderRadius="lg"
            overflow="hidden"
            minW="100px"
            maxW="100px"
            height="100px"
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
            w="100%"
            h="100%"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[index]}
              alt={`Sprite ${index}`}
              fill
              objectFit="contain"
              onError={(e) => {
                e.currentTarget.src = "/404.png";
                e.currentTarget.srcset = "/404.png";
              }}
            />
          </MotionBox>
        </AnimatePresence>
      </Flex>

      <AnimatePresence>
        {hovering && (
          <>
            <MotionIconButton
              aria-label="Previous"
              onClick={handlePrev}
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              variant="ghost"
              size="sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft />
            </MotionIconButton>
            <MotionIconButton
              aria-label="Next"
              onClick={handleNext}
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              variant="ghost"
              size="sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight />
            </MotionIconButton>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default PokemonImageCarousel;
