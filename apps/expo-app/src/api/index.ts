export { default as api } from "./axios";

export * from "./movie";
export * from "./details";

export const createPosterUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w200/${path}`;
};
