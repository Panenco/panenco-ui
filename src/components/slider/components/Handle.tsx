import * as React from 'react';
import { GetHandleProps } from 'react-compound-slider';
import { PUITheme } from 'utils/types';
import { StyledHandle } from '../style';

interface HandleProps {
  domain?: number[];
  handle: {
    id: string;
    value: number;
    percent: number;
  };
  getHandleProps: GetHandleProps;
  formatValue: (value: any) => any;
  onChange?: any;
  isActive?: boolean;
  theme?: PUITheme;
  mode?: string;
}

export const Handle = ({
  handle,
  getHandleProps,
  formatValue,
  onChange,
  isActive,
  theme,
  mode,
}: HandleProps): JSX.Element => {
  const { id, value, percent } = handle;

  if (onChange) React.useEffect(() => onChange(value), [value]);

  const vLabel = formatValue(value);
  return (
    <StyledHandle
      percent={percent}
      isActive={isActive}
      data-id={`${id}`}
      theme={theme}
      mode={mode}
      {...getHandleProps(id)}
    >
      <span className="valueLabel">{vLabel}</span>
    </StyledHandle>
  );
};

Handle.defaultProps = {
  isActive: false,
};
