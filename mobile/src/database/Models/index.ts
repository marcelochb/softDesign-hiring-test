export type ModelOfTableUser = {
  idPessoa?: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  sus: string;
  cep: string;
};

type ModelOfThumbnailHero = {
  path: string;
  extension: string;
};

export type ModelOfTableHeroesCharacters = {
  id: number;
  name: string;
  description: string;
  thumbnail: ModelOfThumbnailHero;
};

export type ModelOfDataResponseApiFromHerosCharacters = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ModelOfTableHeroesCharacters[];
};

export type ModelOfResponseApiFromHerosCharacters = {
  data: ModelOfDataResponseApiFromHerosCharacters;
};

export type ModelOfTableHeroesComics = {
  id: number;
  thumbnail: ModelOfThumbnailHero;
};

export type ModelOfDataResponseApiFromHerosComics = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ModelOfTableHeroesComics[];
};

export type ModelOfResponseApiFromHerosComics = {
  data: ModelOfDataResponseApiFromHerosComics;
};
