import mongoose from 'mongoose';

const MultilingualSchema = new mongoose.Schema({
  fr: { type: String, required: true },
  en: { type: String, required: true },
  zh: { type: String, required: true },
  ar: { type: String, required: true },
  ln: { type: String },
  sw: { type: String }
});

const ContentSchema = new mongoose.Schema({
  title: { type: MultilingualSchema, required: true },
  texte: { type: MultilingualSchema, required: true },
  reference: { type: MultilingualSchema, required: true }
});

const ArticleSchema = new mongoose.Schema({
  number: { type: MultilingualSchema, required: true },
  title: { type: MultilingualSchema, required: true },
  content: { type: [ContentSchema], required: true },
  decree: { type: MultilingualSchema, required: true },
  isFavorite: { type: Boolean, default: false }
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);