import { Other } from "@/types/pokemon-types";

type SpriteValue = string | null | SpriteObject;
type SpriteObject = Other | { [key: string]: SpriteValue };

export function extractSpriteUrls(sprites: Other): string[] {
  const urls: string[] = [];

  function recurse(obj: SpriteObject | string): void {
    if (
      typeof obj === "string" &&
      obj.startsWith("http") &&
      !obj.endsWith(".gif")
    ) {
      urls.push(obj);
    } else if (obj && typeof obj === "object") {
      for (const value of Object.values(obj)) {
        recurse(value);
      }
    }
  }

  recurse(sprites);
  return urls;
}
