interface ArticleListState {
  data: ArticleModel[];
  isLoading: boolean;
  columns: Record<string, any>[];
}

interface ArticleCreateState {
  title: string;
  body: string;
  isLoading: boolean;
}

interface ArticleModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}
