import { Button, Form, Input } from 'antd';
import { FormProps } from 'antd/lib/form';
import Axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { ChangeEvent, FormEvent, PureComponent, ReactNode } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { ArticleCreateState, ArticleModel } from '../../typings/states/article';

export default class ArticleCreatePage extends PureComponent<{}, ArticleCreateState> {
  /**
   * Form item layout
   *
   * @type {FormProps}
   */
  private readonly formItemLayout: FormProps = {
    labelCol: {
      xs: { span: 1 },
      sm: { span: 1 },
    },
    wrapperCol: {
      xs: { span: 8 },
      sm: { span: 8 },
    },
  };

  /**
   * Tail form item layout
   *
   * @type {FormProps}
   */
  private readonly tailFormItemLayout: FormProps = {
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
    await Axios.post<ArticleModel>('https://jsonplaceholder.typicode.com/posts', {
      ...this.state,
    });
    this.setState({ isLoading: false });
    await Router.push('/article');
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
          <Form {...this.formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Title">
              <Input
                name="title"
                placeholder="Enter Title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Body">
              <Input
                name="body"
                placeholder="Enter Body"
                value={this.state.body}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item {...this.tailFormItemLayout}>
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
