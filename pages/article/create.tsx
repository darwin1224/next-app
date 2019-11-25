import { Button, Form, Input } from 'antd';
import Axios from 'axios';
import Link from 'next/link';
import React, { ChangeEvent, Component, FormEvent, ReactNode } from 'react';
import BaseLayout from '../../components/BaseLayout';

const formItemLayout = {
  labelCol: {
    xs: { span: 1 },
    sm: { span: 1 },
  },
  wrapperCol: {
    xs: { span: 1 },
    sm: { span: 4 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 4,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 1,
    },
  },
};

export default class ArticleCreatePage extends Component<{}, ArticleCreateState> {
  /**
   * Constructor
   *
   * @param {Readonly<{}>} props
   * @returns {void}
   */
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      body: '',
      isLoading: false,
    };
  }

  /**
   * Handle input change
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   */
  private handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  /**
   * Handle submit form
   *
   * @param {FormEvent<HTMLFormElement>} e
   * @returns {Promise<void>}
   */
  private async handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    this.setState({ isLoading: true });
    await Axios.post('https://jsonplaceholder.typicode.com/posts');
    this.setState({ isLoading: false });
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
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Title">
              <Input name="title" value={this.state.title} onChange={this.handleInputChange} />
            </Form.Item>
            <Form.Item label="Body">
              <Input name="body" value={this.state.body} onChange={this.handleInputChange} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={(!this.state.title && !this.state.body) || this.state.isLoading}
                style={{ marginRight: '10px' }}
              >
                {this.state.isLoading ? 'Saving...' : 'Save'}
              </Button>
              <Button type="default">
                <Link href="/article">
                  <a>Cancel</a>
                </Link>
              </Button>
            </Form.Item>
          </Form>
        </BaseLayout>
      </>
    );
  }
}
