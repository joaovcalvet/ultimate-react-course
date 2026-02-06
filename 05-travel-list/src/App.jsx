import { useState } from "react";
import { Logo } from "./components/Logo/component";
import { Form } from "./components/Form/component";
import { PackingList } from "./components/PackingList/component";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((totalPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${totalItems} items on your list, and you already packed
          ${totalPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
