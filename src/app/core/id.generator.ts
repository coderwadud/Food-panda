export function idGenerator(): string {
  const date = new Date();
  const timestamp = date.getTime();
  const day = date.getDate().toString().padStart(2, '0');

  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

  return `ID-${timestamp}${day}-${random}`;
}
