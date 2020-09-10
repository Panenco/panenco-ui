import React from 'react';
import { Row, Col, SecondaryButton } from 'components';
import { colors } from 'styles';
import { useMode } from 'utils/hooks';
import { ThemeMode } from 'utils/types';

// eslint-disable-next-line
export const WrappedComponent = ({ children, style }) => {
  const { mode, setMode } = useMode();
  const nextTheme = mode === ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${mode === ThemeMode.dark ? colors.dark : colors.light}`,
        ...style,
      }}
    >
      <Row style={{ justifyContent: 'flex-end', marginRight: '15px' }}>
        <Col s="3" m="3" l="3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SecondaryButton
            // eslint-disable-next-line
            onClick={() => {
              setMode(mode === ThemeMode.dark ? ThemeMode.light : ThemeMode.dark);
            }}
            style={{ textTransform: 'capitalize' }}
          >
            {`${nextTheme} mode`}
          </SecondaryButton>
        </Col>
      </Row>
      {React.Children.map(children, (child) => React.cloneElement(child, { mode }))}
    </div>
  );
};
