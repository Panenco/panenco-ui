import * as React from 'react';
import { GetTrackProps } from 'react-compound-slider';
import { PUITheme } from 'utils/types';
import { StyledTrack } from '../style';

type TrackProps = {
  source: {
    id: string;
    value: number;
    percent: number;
  };
  target: {
    id: string;
    value: number;
    percent: number;
  };
  getTrackProps: GetTrackProps;
  theme: PUITheme;
};

export const Track = ({ source, target, getTrackProps, theme }: TrackProps): JSX.Element => {
  return (
    <StyledTrack
      style={{
        left: `${source.percent}%`,
        width: `calc(${target.percent - source.percent}%)`,
      }}
      theme={theme}
      {...getTrackProps()}
    />
  );
};
