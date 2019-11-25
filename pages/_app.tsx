import App from 'next/app';
import React from 'react';

class MyApp extends App {
  /**
   * Render function
   *
   * @returns {JSX.Element}
   */
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
