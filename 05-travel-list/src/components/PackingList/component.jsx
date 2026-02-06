import { useState } from "react";
import { Item } from "./partials/Item/component";
import { Actions } from "./partials/Actions/component";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  let sortedItems = [];

  switch (sortBy) {
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      sortedItems = items;
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <Actions
        sortBy={sortBy}
        onSortChange={handleSortChange}
        onClearList={onClearList}
      />
    </div>
  );
}
