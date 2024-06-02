export const categories = ["dog", "cat", "rock", "trinity"] as const;

export type Category = typeof categories[number];
