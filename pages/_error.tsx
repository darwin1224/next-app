import React, { Component, ReactNode } from 'react';

export default class ErrorPage extends Component {
  /**
   * Render function
   * 
   * @returns {ReactNode}
   */
  public render(): ReactNode {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <h1>404 | Page Not Found</h1>
        </div>
      </>
    );
  }
}
