export interface Multilingual {
  fr: string;
  en?: string;
  zh?: string;
  ar?: string;
  ln?: string;
  sw?: string;
}

export interface RuleContent {
  _id: string;
  title: Multilingual;
  texte: Multilingual;
  reference?: Multilingual;
}

export interface Rule {
  _id: string;
  number: Multilingual;
  title: Multilingual;
  decree: Multilingual;
  content: RuleContent[];
  isFavorite?: boolean;
}
