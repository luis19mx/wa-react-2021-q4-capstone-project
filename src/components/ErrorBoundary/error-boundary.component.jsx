import { Component } from 'react';
import FallbackComponent from './fallback.component';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.error && prevState.error === this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    const { error } = this.state;

    if (error) {
      // return <this.props.FallbackComponent error={error} />;
      return <FallbackComponent error={error} />;
    }

    return this.props.children;
  }
}
