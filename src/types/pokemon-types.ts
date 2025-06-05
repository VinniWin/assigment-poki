export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprite;
  types: Type[];
  abilities: Ability[];
  stats: TStat[];
  moves: Mfe[];
}

export interface TStat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Ability2 {
  name: string;
  url: string;
}
export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface PokemonSprite {
  front_default: string | null;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: string;
  front_female: null | string;
}

export interface Home {
  front_default: string;
  front_female: null | string;
  front_shiny: string;
  front_shiny_female: null | string;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Showdown {
  back_default: string;
  back_female: null | string;
  back_shiny: string;
  back_shiny_female: null | string;
  front_default: string;
  front_female: null | string;
  front_shiny: string;
  front_shiny_female: null | string;
}

export interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: null | string;
  version_group: VersionGroup;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}
