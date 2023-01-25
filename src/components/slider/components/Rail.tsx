import * as React from 'react';
import { GetRailProps } from 'react-compound-slider';

import { StyledInputRange } from '../style';

type SliderRailProps = {
  getRailProps: GetRailProps;
};

export const SliderRail = ({ getRailProps }: SliderRailProps): JSX.Element => {
  return (
    <StyledInputRange>
      <div {...getRailProps()} className='rail' />
    </StyledInputRange>
  );
};
