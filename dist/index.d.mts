interface User {
    id: number;
    name: string;
}
declare function greet(u: User): string;

export { type User, greet };
