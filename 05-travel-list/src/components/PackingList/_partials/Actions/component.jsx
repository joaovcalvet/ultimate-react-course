export function Actions({ sortBy, onSortChange, onClearList }) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => onSortChange(e)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>

      <button onClick={() => onClearList()}>Clear List</button>
    </div>
  );
}
