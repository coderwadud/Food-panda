
export function generateStringId<T extends { id: string }>(items: T[]): string {
  if (!items || items.length === 0) return "0";

  const numericIds = items
    .map(item => parseInt(item.id))
    .filter(id => !isNaN(id));

  if (numericIds.length === 0) return "0";

  const maxId = Math.max(...numericIds);
  return (maxId + 1).toString();
}
