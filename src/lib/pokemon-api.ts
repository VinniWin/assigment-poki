import { PokemonApiResponse, PokemonDetail } from "@/types/pokemon-types";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchAllPokemons(
  limit: number = 30,
  revalidateTime: number = 86400
): Promise<PokemonApiResponse> {
  try {
    const res = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}`, {
      next: { revalidate: revalidateTime },
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Error response:", errorBody);
      throw new Error(`Failed to fetch Pokemon list. Status: ${res.status}`);
    }

    const data = await res.json();
    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid data structure received from PokeAPI");
    }

    return data;
  } catch (error) {
    console.error("Error in fetchAllPokemons:", error);
    throw error;
  }
}

export async function fetchPokemonDetail(
  name: string,
  revalidateTime: number = 86400
): Promise<PokemonDetail> {
  try {
    const res = await fetch(`${POKEAPI_BASE_URL}/pokemon/${name}`, {
      next: { revalidate: revalidateTime },
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(`Error response for ${name}:`, errorBody);
      throw new Error(
        `Failed to fetch Pokemon detail for '${name}'. Status: ${res.status}`
      );
    }

    const data = await res.json();
    if (!data?.name || !data?.sprites) {
      throw new Error("Invalid Pokemon detail structure");
    }

    return data;
  } catch (error) {
    console.error(`Error in fetchPokemonDetail("${name}")`, error);
    throw error;
  }
}
