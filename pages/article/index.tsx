import { Button, Table } from 'antd';
import Axios from 'axios';
import Link from 'next/link';
import React, { Component, ReactNode } from 'react';
import BaseLayout from '../../components/BaseLayout';

export default class ArticleListPage extends Component<{}, ArticleListState> {
  /**
   * Constructor
   *
   * @param {Readonly<{}>} props
   * @returns {void}
   */
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      columns: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'User ID', dataIndex: 'userId', key: 'userId' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Body', dataIndex: 'body', key: 'body' },
      ],
    };
  }

  /**
   * Component did mount
   *
   * @returns {Promise<void>}
   */
  public async componentDidMount(): Promise<void> {
    await this.getAll();
  }

  /**
   * Get all data
   *
   * @returns {Promise<void>}
   */
  private async getAll(): Promise<void> {
    this.setState({ isLoading: true });
    const { data } = await Axios.get<ArticleModel[]>('https://jsonplaceholder.typicode.com/posts');
    this.setState({ data, isLoading: false });
  }

  /**
   * Render function
   *
   * @returns {ReactNode}
   */
  public render(): ReactNode {
    return (
      <>
        <BaseLayout>
          <Button type="primary" style={{ marginBottom: '20px' }}>
            <Link href="/article/create">
              <a>Add Article</a>
            </Link>
          </Button>
          <Table
            rowKey="id"
            loading={this.state.isLoading}
            columns={this.state.columns}
            dataSource={this.state.data}
          ></Table>
        </BaseLayout>
      </>
    );
  }
}
