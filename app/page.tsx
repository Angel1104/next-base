"use client";

import { useEffect, useState } from "react";
import { getItems, createItem, Item } from "@/lib/items";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getItems().then(setItems).catch(console.error);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const item = await createItem({ name });
    setItems((prev) => [...prev, item]);
    setName("");
  }

  return (
    <main className="max-w-lg mx-auto mt-16 px-4">
      <h1 className="text-2xl font-bold mb-6">Praxis Next + FastAPI</h1>

      <form onSubmit={handleCreate} className="flex gap-2 mb-8">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          className="flex-1 border rounded px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="border rounded px-4 py-3 text-sm">
            <span className="font-medium">{item.name}</span>
            {item.description && (
              <span className="text-gray-500 ml-2">{item.description}</span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
