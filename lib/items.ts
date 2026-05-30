import { apiFetch } from "./api";

export interface Item {
  id: number;
  name: string;
  description: string | null;
}

export interface ItemCreate {
  name: string;
  description?: string;
}

export const getItems = () => apiFetch<Item[]>("/items");
export const createItem = (data: ItemCreate) =>
  apiFetch<Item>("/items", { method: "POST", body: JSON.stringify(data) });
