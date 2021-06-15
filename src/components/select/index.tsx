import * as React from 'react';
import { Props as SelectProps } from 'react-select';
import { useTheme, useMode } from 'utils/hooks';
import { Row, Col } from 'components';
import { InputComponent } from '../../utils/types';
import { StyledSelectWrapper } from './style';
import ChipsComponent from './chips-component';
import SelectComponent from './select-component';

export interface SelectInputProps extends SelectProps, InputComponent {
  value?: any;
  selectWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  clearChips?: boolean;
  wrapperSelectSizes?: {
    lg?: number | string;
    md?: number | string;
    sm?: number | string;
  };
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
    const { mode } = useMode();

    return (
      <StyledSelectWrapper
        theme={theme}
        mode={mode}
        ref={ref}
        style={style}
        className={className}
        error={error}
        wrapperSelectSizes={wrapperSelectSizes}
        {...selectWrapperProps}
      >
        {wrapperSelectSizes ? (
          <>
            <Row className="row">
              <Col lg={wrapperSelectSizes.lg} md={wrapperSelectSizes.md} sm={wrapperSelectSizes.sm} className="col">
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
