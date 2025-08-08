export interface User {
  id: number;
  name: string;
}

export function greet(u: User) {
  return `Hello, ${u.name}!`;
}
