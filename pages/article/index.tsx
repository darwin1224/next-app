import React, { Component, ReactNode } from 'react';

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
    return <h1>Hello World</h1>;
  }
}
