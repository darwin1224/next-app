interface ArticleListState {
  data: ArticleModel[];
  isLoading: boolean;
  columns: Record<string, any>[];
}

interface ArticleModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}
