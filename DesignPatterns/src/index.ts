import { loader, RecordHandler } from "./loader";

interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface Database<T> {
  set(newValue: T): void;
  get(id: string): T;
}
