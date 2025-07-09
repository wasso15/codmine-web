export interface Multilingual {
  fr: string;
  en?: string;
  zh?: string;
  ar?: string;
  ln?: string;
  sw?: string;
}

export interface ArticleContent {
  _id: string;
  title: Multilingual;
  texte: Multilingual;
  reference?: Multilingual;
}

export interface Article {
  _id: string;
  number: Multilingual;
  title: Multilingual;
  decree: Multilingual;
  content: ArticleContent[];
  isFavorite?: boolean;
}
