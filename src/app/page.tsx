import PokemonList from "@/components/ui/PokemonList";
import { fetchAllPokemons } from "@/lib/pokemon-api";

export default async function Home() {
  const initialData = await fetchAllPokemons(120);
  return <PokemonList initialData={initialData} />;
}

