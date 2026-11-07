import { Component } from 'react';

export default class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn('3D scene unavailable, using static background.', error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}
