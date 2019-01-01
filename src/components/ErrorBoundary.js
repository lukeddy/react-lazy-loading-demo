import React, { Component } from 'react';


export default class ErrorBoundary extends Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Error ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Uh oh...There was a problem loading your component</h1>;
    }

    return this.props.children;
  }
}