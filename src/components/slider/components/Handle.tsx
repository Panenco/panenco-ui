import * as React from 'react';
import { GetHandleProps } from 'react-compound-slider';
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
}

export const Handle = ({ handle, getHandleProps, formatValue, onChange, isActive }: HandleProps): JSX.Element => {
  const { id, value, percent } = handle;

  if (onChange) React.useEffect(() => onChange(value), [value]);

  const vLabel = formatValue(value);
  return (
    <StyledHandle percent={percent} isActive={isActive} data-id={`${id}`} {...getHandleProps(id)}>
      <span className='valueLabel'>{vLabel}</span>
    </StyledHandle>
  );
};

Handle.defaultProps = {
  isActive: false,
  domain: 0,
  onChange: () => {},
};
