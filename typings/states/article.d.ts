import { ColumnProps } from 'antd/lib/table';

interface ArticleListState {
  data: ArticleModel[];
  isLoading: boolean;
  columns: ColumnProps[];
}

interface ArticleCreateState {
  title: string;
  body: string;
  isLoading: boolean;
}

interface ArticleEditState {
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
