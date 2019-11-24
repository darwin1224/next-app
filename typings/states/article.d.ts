interface ArticleListState {
  data: ArticleModel[];
}

interface ArticleModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}
