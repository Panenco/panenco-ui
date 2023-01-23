import * as React from 'react';
import { GetTrackProps } from 'react-compound-slider';
import { StyledTrack } from '../style';

type TrackProps = {
  getTrackProps: GetTrackProps;
  source: {
    id: string;
    percent: number;
    value: number;
  };
  target: {
    id: string;
    percent: number;
    value: number;
  };
};

export const Track = ({ source, target, getTrackProps }: TrackProps): JSX.Element => {
  return (
    <StyledTrack
      style={{
        left: `${source.percent}%`,
        width: `calc(${target.percent - source.percent}%)`,
      }}
      {...getTrackProps()}
    />
  );
};
