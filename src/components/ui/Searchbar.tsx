import { useColorModeValue } from "@/hooks/useColorModeValue";
import { Field, Input } from "@chakra-ui/react";

interface SearchbarProps {
  setSearchTerm: (value: string) => void;
}

const Searchbar = ({ setSearchTerm }: SearchbarProps) => {
  const textColor = useColorModeValue("gray.800", "gray.100");
  return (
    <Field.Root>
      <Field.Label color={textColor}>Pokemon Name</Field.Label>
      <Input
        variant={"outline"}
        placeholder="Search Pokemon..."
        onChange={(e) => setSearchTerm(e.target.value)}
        maxW="400px"
      />
      <Field.HelperText color={textColor} mb={6}>
        Search Pokemon by name.
      </Field.HelperText>
    </Field.Root>
  );
};

export default Searchbar;
