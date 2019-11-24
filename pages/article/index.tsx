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
        <BaseLayout></BaseLayout>
      </>
    );
  }
}
