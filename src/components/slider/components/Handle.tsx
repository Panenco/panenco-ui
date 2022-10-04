import * as React from 'react';
import { GetHandleProps } from 'react-compound-slider';
import { PUITheme } from 'utils/types';
import { StyledHandle } from '../style';

interface HandleProps {
  domain?: number[];
  formatValue: (value: any) => any;
  getHandleProps: GetHandleProps;
  handle: {
    id: string;
    percent: number;
    value: number;
  };
  isActive?: boolean;
  onChange?: any;
  theme: PUITheme;
}

export const Handle = ({
  handle,
  getHandleProps,
  formatValue,
  onChange,
  isActive,
  theme,
}: HandleProps): JSX.Element => {
  const { id, value, percent } = handle;

  if (onChange) React.useEffect(() => onChange(value), [value]);

  const vLabel = formatValue(value);
  return (
    <StyledHandle percent={percent} isActive={isActive} data-id={`${id}`} theme={theme} {...getHandleProps(id)}>
      <span className='valueLabel'>{vLabel}</span>
    </StyledHandle>
  );
};

Handle.defaultProps = {
  isActive: false,
  domain: 0,
  onChange: () => {},
};
