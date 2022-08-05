import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Row, Col } from 'components';
import { StyledSelectWrapper } from './style';
import ChipsComponent from './chips-component';
import SelectComponent, { ComponentProps } from './select-component';

export interface SelectInputProps extends ComponentProps {
  clearChips?: boolean;
  hideChips?: boolean;
}

export const SelectInput = React.forwardRef<HTMLDivElement, SelectInputProps>(
  (
    {
      value,
      error,
      isMulti,
      selectWrapperProps,
      style,
      className,
      wrapperSelectSizes,
      hideChips,
      ...props
    }: SelectInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();

    return (
      <StyledSelectWrapper
        theme={theme}
        ref={ref}
        style={style}
        className={className}
        error={error}
        wrapperSelectSizes={wrapperSelectSizes}
        {...selectWrapperProps}
      >
        {wrapperSelectSizes ? (
          <>
            <Row className='row'>
              <Col lg={wrapperSelectSizes.lg} md={wrapperSelectSizes.md} sm={wrapperSelectSizes.sm} className='col'>
                <SelectComponent error={error} isMulti={isMulti} value={value} {...props} />
              </Col>
            </Row>
            {!hideChips && isMulti && (value?.length > 0 || value?.size > 0) && (
              <ChipsComponent error={error} value={value} {...props} />
            )}
          </>
        ) : (
          <>
            <SelectComponent error={error} isMulti={isMulti} value={value} {...props} />
            {!hideChips && isMulti && (value?.length > 0 || value?.size > 0) && (
              <ChipsComponent error={error} value={value} {...props} />
            )}
          </>
        )}
      </StyledSelectWrapper>
    );
  },
);
