import React from 'react';

import TextReadme from 'components/text/README.md';
import TextDocs from 'components/text/DOCS.md';

import { Text, Row, Col } from 'components';

import { sizes, colors } from 'styles';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

// eslint-disable-next-line
const WrappedCol = ({ children }) => (
  <Col s="1" m="2" l="4" style={{ display: 'flex', justifyContent: 'center' }}>
    {children}
  </Col>
);

// eslint-disable-next-line
const Child = ({ mode }) => {
  return (
    <>
      <Row>
        <WrappedCol>
          <Text size={sizes.l} color={mode === 'light' ? colors.base900 : colors.base700}>
            Name
          </Text>
        </WrappedCol>
        <WrappedCol>
          <Text size={sizes.l} color={mode === 'light' ? colors.base900 : colors.base700}>
            Text Size
          </Text>
        </WrappedCol>
        <WrappedCol>
          <Text size={sizes.l} color={mode === 'light' ? colors.base900 : colors.base700}>
            Line Height
          </Text>
        </WrappedCol>
      </Row>
      {Object.keys(sizes)
        .reverse()
        .map((el) => (
          <Row key={el}>
            <WrappedCol>
              <Text size={sizes[el]} color={mode === 'light' ? colors.base900 : colors.base700}>
                {el}
              </Text>
            </WrappedCol>
            <WrappedCol>
              <Text size={sizes[el]} color={mode === 'light' ? colors.base900 : colors.base700}>
                {sizes[el].textSize}
              </Text>
            </WrappedCol>
            <WrappedCol>
              <Text size={sizes[el]} color={mode === 'light' ? colors.base900 : colors.base700}>
                {sizes[el].lineHeight}
              </Text>
            </WrappedCol>
          </Row>
        ))}
    </>
  );
};

export default decorator('Text', TextDocs, TextReadme).add('Text component', () => {
  return (
    <WrappedComponent>
      <Child />
    </WrappedComponent>
  );
});
