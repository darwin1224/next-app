import { Button, Table } from 'antd';
import Axios from 'axios';
import Link from 'next/link';
import React, { Component, MouseEventHandler, ReactNode } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { ArticleListState, ArticleModel } from '../../typings/states/article';

export default class ArticleListPage extends Component<{}, ArticleListState> {
  /**
   * Constructor
   *
   * @param {Readonly<{}>} props
   * @returns {void}
   */
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      data: [],
      isLoading: false,
      columns: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'User ID', dataIndex: 'userId', key: 'userId' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Body', dataIndex: 'body', key: 'body' },
        {
          title: 'Action',
          key: 'action',
          render: (text: any, record: ArticleModel): ReactNode => (
            <>
              <Button type="default">
                <Link href="/article/[id]/edit" as={`/article/1/edit`}>
                  <a>Edit</a>
                </Link>
              </Button>
              <Button type="danger" onClick={this.handleDelete(record.id)}>
                Delete
              </Button>
            </>
          ),
        },
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
    try {
      this.setState({ isLoading: true });
      const { data } = await Axios.get<ArticleModel[]>(
        'https://jsonplaceholder.typicode.com/posts',
      );
      this.setState({ data, isLoading: false });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  /**
   * Handle delete
   *
   * @param {number} id
   * @returns {MouseEventHandler<HTMLElement>}
   */
  private handleDelete(id: number): MouseEventHandler<HTMLElement> {
    return async (): Promise<void> => {
      if (confirm('Are you sure you want to delete this data?')) {
        try {
          this.setState({ isLoading: true });
          await Axios.delete<number, {}>(`https://jsonplaceholder.typicode.com/posts/${id}`);
          this.setState({ isLoading: false });
        } catch (err) {
          throw new Error(err.message);
        }
      }
    };
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
