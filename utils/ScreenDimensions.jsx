import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './useWindowSize';

const styles = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  border: '1px solid rgb(234, 234, 234)',
  borderRadius: '2px',
  color: 'rgb(68, 68, 68)',
  fontSize: '11px',
  letterSpacing: '1px',
  padding: '8px',
  textTransform: 'uppercase',
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
};

// Usage
function ScreenDimensions({ children }) {
  const size = useWindowSize();
  return (
    <>
      {children}
      <div style={styles}>
        {size.width}px / {size.height}px
      </div>
    </>
  );
}

ScreenDimensions.propTypes = {
  children: PropTypes.node,
};

ScreenDimensions.defaultProps = {
  children: null,
};

export default ScreenDimensions;
