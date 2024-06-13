import { Component, GetDerivedStateFromError, ReactNode } from 'react';

type TErrorBoundary = {
  children?: ReactNode;
};

type TErrorBoundaryState = {
  error?: unknown;
};

export class ErrorBoundary extends Component<
  TErrorBoundary,
  TErrorBoundaryState
> {
  state: TErrorBoundaryState = {};

  // eslint-disable-next-line max-len
  static getDerivedStateFromError: GetDerivedStateFromError<
    TErrorBoundary,
    TErrorBoundaryState
  > = (error) => ({ error });

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const {
      state: { error },
    } = this;

    if (error) {
      return (
        <div className='flex-1 flex-col gap-2 p-4 flex-center'>
          <h1 className='text-4xl font-medium'>Ошибка</h1>

          <code className='text-base'>
            {error instanceof Error
              ? error.message
              : typeof error === 'string'
                ? error
                : JSON.stringify(error)}
          </code>
        </div>
      );
    }

    return this.props.children;
  }
}
