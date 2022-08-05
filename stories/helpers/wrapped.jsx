import React from 'react';
import { colors } from 'styles';

// eslint-disable-next-line
export const WrappedComponent = ({ children, style = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${colors.base100}`,
        ...style,
      }}
    >
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};
