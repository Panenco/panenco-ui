import * as React from 'react';
import cx from 'classnames';

import { Slider as RCSlider, SliderProps as RSliderProps, Rail, Handles, Tracks } from 'react-compound-slider';
import { SliderRail, Handle, Track } from './components';
import { StyledRootSlider } from './style';

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set disabled state
   * */
  disabled?: boolean;
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100]. It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   * */
  domain: number[];
  /**
   * Modifying value in handles, e.g. formatValue={val => '\${val} Example'}
   * */
  formatValue: (value: any) => any;
  innerRef?: any;
  /**
   * Props from **react-compound-slider** library
   * */
  sliderProps?: RSliderProps;
  /**
   * It's a start value on rail, e.g. [0] or with 2 handles [0, 15]
   * */
  startValues: number[];
  /**
   * Step for sliders handles
   * */
  step?: number;
}

interface SliderState {
  domain: number[];
  values: number[];
}

export class Slider extends React.Component<SliderProps, SliderState> {
  activeId: any = null;

  refSLider: any = React.createRef<HTMLDivElement>();

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    domain: [0, 100],
    startValues: [0],
    formatValue: (value: any): any => value,
    disabled: false,
    step: 1,
  };

  constructor(props) {
    super(props);
    const { domain, startValues } = this.props;

    this.state = {
      domain: domain?.slice(),
      values: startValues?.slice(),
    };
  }

  componentDidMount(): void {
    const { innerRef } = this.props;
    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(this.refSLider.current);
      } else {
        innerRef.current = this.refSLider.current;
      }
    }
  }

  customMode = (curr, next): any => {
    const {
      state: { domain },
      activeId,
    } = this;
    const domainWidth = domain[1] - domain[0];
    const isSlider = this.refSLider.current;
    const sliderWidth = isSlider.clientWidth;
    const handles = isSlider.querySelectorAll('[data-id]');
    const normalizeCoefficient = 1.15;

    for (let i = 0; i < curr.length; i += 1) {
      if (curr[i].key !== next[i].key) {
        return curr;
      }

      if (curr.length === 2) {
        const secondHandleWidth = handles[1].clientWidth;
        const firstHandleWidth = handles[0].clientWidth;
        const calculateDistance = (x: number): number =>
          Math.floor((x / sliderWidth) * domainWidth * normalizeCoefficient);

        const distanceBetweenHandlesForMin = curr[1].val - calculateDistance(secondHandleWidth);
        const distanceBetweenHandlesForMax = curr[0].val + calculateDistance(firstHandleWidth);

        if (
          (next[i].key === curr[0].key && activeId === curr[0].key && next[i].val >= distanceBetweenHandlesForMin) ||
          (next[i].key === curr[1].key && activeId === curr[1].key && next[i].val <= distanceBetweenHandlesForMax)
        ) {
          return curr;
        }
      }

      if (next[i + 1] && next[i].val === next[i + 1].val) {
        return curr;
      }
    }

    return next;
  };

  render(): JSX.Element {
    const {
      state: { domain, values },
      props: { formatValue, disabled, className, onChange, step, style, sliderProps, ...otherProps },
    } = this;
    return (
      <StyledRootSlider ref={this.refSLider} className={className} style={style} {...otherProps}>
        <RCSlider
          mode={this.customMode}
          step={step}
          domain={domain}
          className={cx(disabled && 'disabled')}
          values={values}
          disabled={disabled}
          {...sliderProps}
        >
          <Rail>{({ getRailProps }): JSX.Element => <SliderRail getRailProps={getRailProps} />}</Rail>
          <Handles>
            {({ handles, activeHandleID, getHandleProps }): JSX.Element => {
              this.activeId = activeHandleID;

              return (
                <div className='slider-handles'>
                  {handles.map((handle) => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      isActive={handle.id === activeHandleID}
                      getHandleProps={getHandleProps}
                      formatValue={formatValue}
                      onChange={onChange}
                    />
                  ))}
                </div>
              );
            }}
          </Handles>
          <Tracks left={values.length < 2} right={false}>
            {({ tracks, getTrackProps }): JSX.Element => {
              return (
                <div className='slider-tracks'>
                  {tracks.map(({ id, source, target }) => (
                    <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
                  ))}
                </div>
              );
            }}
          </Tracks>
        </RCSlider>
      </StyledRootSlider>
    );
  }
}
