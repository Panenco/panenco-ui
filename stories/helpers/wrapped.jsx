import React from 'react';
import { Row, Col, SecondaryButton } from 'components';
import { colors } from 'styles';
import { useMode } from 'utils/hooks';
import { ThemeMode } from 'utils/types';

// eslint-disable-next-line
export const WrappedComponent = ({ children, style = {} }) => {
  const { mode, setMode } = useMode();
  const nextTheme = mode === ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `${mode === ThemeMode.dark ? colors.base900 : colors.base100}`,
        ...style,
      }}
    >
      <Row style={{ justifyContent: 'flex-end', marginRight: '15px' }}>
        <Col xs="3" md="3" lg="3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <SecondaryButton
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
