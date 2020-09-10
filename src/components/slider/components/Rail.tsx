import * as React from 'react';
import { GetRailProps } from 'react-compound-slider';
import { PUITheme } from 'utils/types';
import { StyledInputRange } from '../style';

type SliderRailProps = {
  getRailProps: GetRailProps;
  theme: PUITheme;
};

export const SliderRail = ({ getRailProps, theme }: SliderRailProps): JSX.Element => {
  return (
    <StyledInputRange theme={theme}>
      <div {...getRailProps()} className="rail" />
    </StyledInputRange>
  );
};
