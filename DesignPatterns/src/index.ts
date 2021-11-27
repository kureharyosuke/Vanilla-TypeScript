import { loader, RecordHandler } from "./loader";

interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T | undefined {
      return this.db[id];
    }
  }
  return InMemoryDatabase;
}

// class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
//   private db: Record<string, T> = {};

//   public set(newValue: T): void {
//     this.db[newValue.id] = newValue;
//   }
//   public get(id: string): T | undefined {
//     return this.db[id];
//   }
// }

// const pokemonDB = new InMemoryDatabase<Pokemon>();

const pokemonDB = createDatabase<Pokemon>();

pokemonDB.set({
  id: "Bulbasaur",
  attack: 50,
  defense: 10,
});

console.log(pokemonDB.get("Bulbasaur"));
